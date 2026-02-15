import { useNavigate } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.footerMainDiv}>
      <div className={classes.footerDiv}>
        <div className={classes.workingHoursDiv}>
          <p className={classes.workingHoursHeading}>Working Hours</p>
          <p className={classes.workingHours}>
            Monday - Tuesday: 8:00 AM - 9:00 PM
          </p>
          <p className={classes.workingHours}>
            Wednesday - Thursday: 8:00 AM - 9:00 PM
          </p>
          <p className={classes.workingHours}>
            Friday - Saturday: 8:00 AM - 9:00 PM
          </p>
          <p className={classes.workingHours}>Sunday: 8:00 AM - 9:00 PM</p>
        </div>
        <div className={classes.quickLinksDiv}>
          <p className={classes.heading}>Quick Links</p>
          <p className={classes.text}
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <p className={classes.text}
            onClick={() => navigate("/about")}
          >
            About
          </p>
          <p
            onClick={() => navigate("/services")}
            className={classes.text}
          >
            Services
          </p>
          <p
            onClick={() => navigate("/contact")}
            className={classes.text}
          >
            Contact
          </p>
        </div>
        <div>
          <p className={classes.heading}>Contact info</p>
          <p className={classes.text}
          >
            Phone: +1 123-456-7890
          </p>
          <p className={classes.text}>
            Address: 123 Main Street, Anytown, USA
          </p>
          <p className={classes.text}>
            Email: info@happytravels.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
