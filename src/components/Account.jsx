import { useState } from "react";

export default function Account() {
  const [login, setLogin] = useState(true);

  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "2px solid gray",
        borderRadius: "10px",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >
      <h2>My Account</h2>

      <button
        onClick={() => setLogin(true)}
        style={{
          padding: "10px 20px",
          margin: "10px",
          background: login ? "#007bff" : "#ccc",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Login
      </button>

      <button
        onClick={() => setLogin(false)}
        style={{
          padding: "10px 20px",
          margin: "10px",
          background: !login ? "#28a745" : "#ccc",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Sign Up
      </button>

      {login ? (
        <div style={{ marginTop: "20px" }}>
          <h3>Login</h3>

          <input
            type="email"
            placeholder="Enter Email"
            style={inputStyle}
          />

          <br />
          <br />

          <input
            type="password"
            placeholder="Enter Password"
            style={inputStyle}
          />

          <br />
          <br />

          <button style={buttonStyle}>Login</button>
        </div>
      ) : (
        <div style={{ marginTop: "20px" }}>
          <h3>Sign Up</h3>

          <input
            type="text"
            placeholder="Full Name"
            style={inputStyle}
          />

          <br />
          <br />

          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
          />

          <br />
          <br />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
          />

          <br />
          <br />

          <input
            type="password"
            placeholder="Confirm Password"
            style={inputStyle}
          />

          <br />
          <br />

          <button style={buttonStyle}>Create Account</button>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: "90%",
  padding: "10px",
  fontSize: "16px"
};

const buttonStyle = {
  padding: "10px 25px",
  background: "#007bff",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "16px"
};