import { Link } from "react-router-dom";

const linkStyle = {
    color: "white",
    margin: "10px",
    textDecoration: "none",
    fontWeight: "bold"
};

export default function Header() {
    return (
        <>
            <h2>Welcome Header Page</h2>

            <h1>React Routing Demo</h1>

            <div
                style={{
                    background: "#007bff",
                    padding: "15px"
                }}
            >
                <Link style={linkStyle} to="/home">Home</Link>

                <Link style={linkStyle} to="/about">About</Link>

                <Link style={linkStyle} to="/services">Services</Link>

                <Link style={linkStyle} to="/faq">FAQ</Link>

                <Link style={linkStyle} to="/account">My Account</Link>

                <Link style={linkStyle} to="/color">Color Task</Link>

                <Link style={linkStyle} to="/gst">GST Task</Link>
            </div>
        </>
    );
}