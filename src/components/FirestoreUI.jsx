import React, { useEffect } from "react";
import { database } from "../config";

function FirestoreUI() {
  useEffect(() => {
    const db = database.collection("users");
    db.get().then((user) => {
      user.docs.forEach((doc) => {
        console.log(doc.data());
      });
    });
  }, []);

  return <div></div>;
}

export default FirestoreUI;
