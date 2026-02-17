import pageNameImage from "../../assets/contact page bg.jpeg";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={classes.pageNameDiv}>
        <img
          className={classes.pageNameImg}
          src={pageNameImage}
          alt="contact page background"
        />
        <h2 className={classes.pageName}>Contact Us</h2>
      </div>
      <h2 className={classes.contactHeading}>Start Your Travel Story With Us, Don't hesitate to contact us</h2>
      <p className={classes.contactText}>
        We’re here to make your travel smooth, safe, and stress-free. Reach out
        to us for bookings, inquiries, or any travel-related assistance — we’re
        just a call, email, or message away.
      </p>
      <div className={classes.contactInfoDiv}>
        <h3>Office Address</h3>
        <p>Happy Travels, 123 Travel Street, Adventure City, AC 12345</p>
      </div>
      <div className={classes.contactInfoDiv}>
        <h3>Email Address</h3>
        <p>contact@happytravels.com</p>
      </div>
      <div className={classes.contactInfoDiv}>
        <h3>Mobile</h3>
        <p>7795375321</p>
      </div>
    </div>
  );
};

export default Contact;
