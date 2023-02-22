import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLastName, setEmail } from "./app/userSlice";
import { useNavigate } from "react-router-dom";

//firsname
//lastname
//email

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const email = useSelector((state) => state.user.email);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    navigate("/dashboard");
  };

  const handleFirstNameChange = (event) => {
    dispatch(setFirstName(event.target.value));
  };

  const handleLastNameChange = (event) => {
    dispatch(setLastName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label>Firstname</label>
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
        <label>Lastname</label>
        <input
          type="text"
          name="lastname"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Submit Data</button>
      </form>
    </div>
  );
}

export default App;
