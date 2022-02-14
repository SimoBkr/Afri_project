import React from "react";
import AuthorizedElement from "../utils/security/AuthorizedElement";
import { SUPER_ADMIN_ROLE, USER_ROLE } from "../utils/security/roles";

const Registered = () => {
  return (
    <div>
      <AuthorizedElement roles={[SUPER_ADMIN_ROLE]}>
        <h1>For admin only</h1>
      </AuthorizedElement>
      <AuthorizedElement roles={[USER_ROLE]}>
        <h1>For users only</h1>
      </AuthorizedElement>
    </div>
  );
};

export default Registered;
