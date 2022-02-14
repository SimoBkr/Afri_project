import { ADMIN_ROLE, AUTHENTICATED_ROLE } from "./roles";

export const tokenRoles = (tokenInfo) => tokenInfo && tokenInfo.roles;

export const isAdmin = (tokenInfo) => {
  const storedRoles = tokenRoles(tokenInfo);
  if (storedRoles) return tokenRoles(tokenInfo).includes(ADMIN_ROLE);
  return false;
};

export const hasAccess = (tokenInfo, roles) => {
  const storedRoles = tokenRoles(tokenInfo);
  if (storedRoles && roles)
    return (
      roles.some((role) => role === AUTHENTICATED_ROLE) ||
      roles.some((role) => tokenRoles(tokenInfo).includes(role))
    );
  return false;
};
