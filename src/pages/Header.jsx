import { Link } from "react-router-dom";

const linkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "15px",
  fontSize: "18px",
  fontWeight: "bold"
};

export default function Header() {
  return (
    <div
      style={{
        background: "#1976d2",
        padding: "20px",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "white" }}>React Routing Example</h1>

      <Link style={linkStyle} to="/">
        Home
      </Link>

      <Link style={linkStyle} to="/about">
        About Us
      </Link>

      <Link style={linkStyle} to="/services">
        Services
      </Link>

      <Link style={linkStyle} to="/faq">
        FAQ
      </Link>

      <Link style={linkStyle} to="/account">
        My Account
      </Link>
    </div>
  );
}