import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import bugsReducer from "./entities/bugs";
import projectsReducer from "./entities/projects";
import usersReducer from "./entities/users";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: usersReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
