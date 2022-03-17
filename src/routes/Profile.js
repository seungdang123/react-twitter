import { authService } from "fBase";
import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  // Logout + redirect
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
