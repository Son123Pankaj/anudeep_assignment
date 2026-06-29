import { useState } from "react";

export default function Account() {

  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = () => {
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    setIsLoginPage(true);
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "30px auto",
        padding: "20px",
        border: "2px solid gray",
        borderRadius: "10px",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >

      <h2>My Account</h2>

      {isLoggedIn ? (

        <div>

          <h3 style={{ color: "green" }}>
            Welcome Pankaj Sharma
          </h3>

          <p>You are successfully logged in.</p>

          <button
            onClick={logoutUser}
            style={buttonStyle}
          >
            Logout
          </button>

        </div>

      ) : (

        <>

          <button
            onClick={() => setIsLoginPage(true)}
            style={{
              ...tabStyle,
              background: isLoginPage ? "#007bff" : "#ccc"
            }}
          >
            Login
          </button>

          <button
            onClick={() => setIsLoginPage(false)}
            style={{
              ...tabStyle,
              background: !isLoginPage ? "#28a745" : "#ccc"
            }}
          >
            Sign Up
          </button>

          {isLoginPage ? (

            <div style={{ marginTop: "20px" }}>

              <h3>Login</h3>

              <input
                type="email"
                placeholder="Enter Email"
                style={inputStyle}
              />

              <br /><br />

              <input
                type="password"
                placeholder="Enter Password"
                style={inputStyle}
              />

              <br /><br />

              <button
                onClick={loginUser}
                style={buttonStyle}
              >
                Login
              </button>

            </div>

          ) : (

            <div style={{ marginTop: "20px" }}>

              <h3>Create Account</h3>

              <input
                type="text"
                placeholder="Full Name"
                style={inputStyle}
              />

              <br /><br />

              <input
                type="email"
                placeholder="Email"
                style={inputStyle}
              />

              <br /><br />

              <input
                type="password"
                placeholder="Password"
                style={inputStyle}
              />

              <br /><br />

              <input
                type="password"
                placeholder="Confirm Password"
                style={inputStyle}
              />

              <br /><br />

              <button
                onClick={() => {
                  alert("Account Created Successfully!");
                  setIsLoginPage(true);
                }}
                style={buttonStyle}
              >
                Create Account
              </button>

            </div>

          )}

        </>

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

const tabStyle = {
  padding: "10px 20px",
  margin: "10px",
  color: "white",
  border: "none",
  cursor: "pointer"
};