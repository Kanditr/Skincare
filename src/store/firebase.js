import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import configureStore from "./configureStore";

const store = configureStore();

export const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
  },
  dispatch: store.dispatch,
};
