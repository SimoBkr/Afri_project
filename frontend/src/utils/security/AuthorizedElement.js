import { hasAccess } from "./index";
import { useAuth } from "../../contexts";

const AuthorizedElement = ({ roles, children }) => {
  const { tokenInfo } = useAuth();
  return hasAccess(tokenInfo, roles) && children;
};

export default AuthorizedElement;
