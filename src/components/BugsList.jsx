import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadBugs,
  getUnresolvedBugs,
  resolveBug,
} from "../store/entities/bugs";

const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs()); // eslint-disable-next-line
  }, []);

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>
          {bug.description}
          <button onClick={() => dispatch(resolveBug(bug.id))}>Resolve</button>
        </li>
      ))}
    </ul>
  );
};

export default BugsList;
