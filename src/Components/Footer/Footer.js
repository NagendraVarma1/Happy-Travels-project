import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "350px",
        padding: "10px",
        color: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{ borderRight: "1px solid lightgray", paddingRight: "40px" }}
        >
          <p style={{ fontSize: "2rem", padding: "5px" }}>Working Hours</p>
          <p
            style={{
              fontSize: "1.2rem",
              borderBottom: "0.3px solid lightgray",
              padding: "5px",
            }}
          >
            Monday - Tuesday: 8:00 AM - 9:00 PM
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              borderBottom: "1px solid lightgray",
              padding: "5px",
            }}
          >
            Wednesday - Thursday: 8:00 AM - 9:00 PM
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              borderBottom: "1px solid lightgray",
              padding: "5px",
            }}
          >
            Friday - Saturday: 8:00 AM - 9:00 PM
          </p>
          <p style={{ fontSize: "1.2rem", padding: "5px" }}>
            Sunday: 8:00 AM - 9:00 PM
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <div>
            <p style={{ fontSize: "2rem", padding: "5px" }}>Quick Links</p>
            <p
              onClick={() => navigate("/")}
              style={{ fontSize: "1.2rem", padding: "5px", cursor: "pointer" }}
            >
              Home
            </p>
            <p
              onClick={() => navigate("/about")}
              style={{ fontSize: "1.2rem", padding: "5px", cursor: "pointer" }}
            >
              About
            </p>
            <p
              onClick={() => navigate("/services")}
              style={{ fontSize: "1.2rem", padding: "5px", cursor: "pointer" }}
            >
              Services
            </p>
            <p
              onClick={() => navigate("/contact")}
              style={{ fontSize: "1.2rem", padding: "5px", cursor: "pointer" }}
            >
              Contact
            </p>
          </div>
          <div>
            <p style={{ fontSize: "2rem", padding: "5px" }}>Contact info</p>
            <p
              style={{
                fontSize: "1.2rem",
                padding: "5px",
              }}
            >
              Phone: +1 123-456-7890
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                padding: "5px",
              }}
            >
              Address: 123 Main Street, Anytown, USA
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                padding: "5px",
              }}
            >
              Email: info@happytravels.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
