import React, { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";
import Env from "../env";
import {
  asyncHandler,
  checkResponse,
  getAuthInfo,
  openNotification,
  removeAuthInfo,
} from "../utils";
import { isEmpty } from "../utils/validator";
import Loading from "../components/Loading";

export const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const history = useHistory();

  const [state, setState] = React.useState({
    tokenInfo: null,
    loading: false,
    error: null,
  });

  const [authenticated, setAuthenticated] = React.useState(!!getAuthInfo());

  useEffect(() => {
    setAuthenticated(!!getAuthInfo());
  }, [getAuthInfo()]);

  useEffect(() => {
    if (authenticated && isEmpty(state.tokenInfo)) tokenInfoRequest().then();
  }, [authenticated && isEmpty(state.tokenInfo)]);

  const loginRequest = asyncHandler(async (formData) => {
    initialLoading();
    const url = `${Env.keycloakUrl}/realms/${Env.keycloakRealm}/protocol/openid-connect/token`;
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    formData = qs.stringify({
      client_id: Env.keycloakClientId,
      grant_type: "password",
      ...formData,
    });
    return await axios
      .post(url, formData, config)
      .then(async (res) => {
        if (checkResponse(res) && res.data.access_token) {
          localStorage.setItem("auth_info", JSON.stringify(res.data));
          initialLoading(false);
        }
        return res;
      })
      .catch(() =>
        handleErrorResponse(
          "error",
          "Your credentials are incorrect or have expired, please try again or reset your password."
        )
      );
  });

  const tokenInfoRequest = asyncHandler(async () => {
    initialLoading();
    // const url = `${Env.keycloakUrl}/realms/${Env.keycloakRealm}/protocol/openid-connect/userinfo`;
    return await axios
      .get("/profile/users/userinfo")
      .then(async (res) => {
        if (checkResponse(res)) {
          setState((prevState) => ({
            ...prevState,
            tokenInfo: res.data,
            loading: false,
          }));
        }
        return res;
      })
      .catch(() =>
        handleErrorResponse(
          "warning",
          "Your session has expired, please login again."
        )
      );
  });

  const handleErrorResponse = (type, message) => {
    setState((prevState) => ({
      ...prevState,
      error: message,
      loading: false,
    }));
    openNotification(type, message);
    logout();
  };

  const logout = () => {
    removeAuthInfo();
    setState((prevState) => ({
      ...prevState,
      tokenInfo: null,
    }));
    setAuthenticated(false);
    history.push("/login");
  };

  const initialLoading = (loading = true) =>
    setState((prevState) => ({
      ...prevState,
      loading,
    }));

  return (
    <Provider
      value={{
        ...state,
        authenticated,
        loginRequest,
        tokenInfoRequest,
        logout,
      }}
    >
      {(state.loading && authenticated) ||
      (!state.tokenInfo && authenticated) ? (
        <Loading />
      ) : (
        children
      )}
    </Provider>
  );
};

export default AuthProvider;