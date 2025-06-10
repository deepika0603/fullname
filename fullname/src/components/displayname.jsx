import React, { useState } from "react";

export default function DisplayName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") setFirstName(value);
    if (name === "lastName") setLastName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`Full Name: ${firstName} ${lastName}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh",
        textAlign: "center",
        paddingLeft: "100px",
      }}
    >
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>
      {fullName && <p>{fullName}</p>}
    </div>
  );
}
