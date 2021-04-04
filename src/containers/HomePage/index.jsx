import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import Axios from "axios";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

export function HomePage(props) {
  // eslint-disable-next-line
  const { users } = useSelector(stateSelector);

  const fetchUsers = async () => {
    const response = await Axios.get("http://reqres.in/api/users?page=2").catch(
      (err) => {
        console.log("Err: ", err);
      }
    );

    console.log("Users: ", response.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
}
