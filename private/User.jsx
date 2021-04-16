import { auth, provider } from "../config";
import { useDispatch, useSelector } from "react-redux";
import {
  userActived,
  userLoggedOut,
  getUserName,
  getUserEmail,
} from "../store/user";
import { Link } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);

  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((result) =>
      dispatch(
        userActived({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      )
    );
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(userLoggedOut());
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      {userName ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <button onClick={handleSignIn}>Sign in</button>
      )}
      <Link to="/2">to Bugs</Link>
    </div>
  );
};

export default User;
