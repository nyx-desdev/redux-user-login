import React from "react";
import { useSelector } from "react-redux";

const LoggedIn = () => {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const email = useSelector((state) => state.user.email);
  return (
    <div>
      <h1>User is loggedin</h1>
      <p>Firstname: {firstName && firstName}</p>
      <p>Lastname: {lastName && lastName}</p>
      <p>Email: {email && email}</p>
    </div>
  );
};

export default LoggedIn;
