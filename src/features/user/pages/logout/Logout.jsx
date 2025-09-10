import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
function Logout() {
  const { logout } = useContext(AuthContext);
  logout();
  return <div></div>;
}

export default Logout;
