import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { AuthContext } from "../auth";
import { auth, provider } from "../config";

function LogInButton() {
  const { currentUser } = useContext(AuthContext);

  const handleLogIn = () => {
    auth.signInWithPopup(provider);
  };

  const handleLogOut = () => {
    auth.signOut();
  };

  return (
    <div>
      {currentUser ? (
        <Button onClick={handleLogOut} variant="outlined" size="small">
          Log out
        </Button>
      ) : (
        <Button onClick={handleLogIn} variant="outlined" size="small">
          Log in
        </Button>
      )}
    </div>
  );
}

export default LogInButton;
