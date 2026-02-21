import classes from "./About.module.css";
import pageNameImage from "../../assets/about page bg.jpeg";
import aboutPageImg from '../../assets/about page img.jpeg'

const About = () => {
  return (
    <div>
      <div className={classes.pageNameDiv}>
        <img
          className={classes.pageNameImg}
          src={pageNameImage}
          alt="about page background"
        />
        <h2 className={classes.pageName}>About us</h2>
      </div>
      <h1 className={classes.heading}>Your Journey, Our Responsibility</h1>
      <div className={classes.aboutPageContent}>
        <div>
          <div className={classes.visionDiv}>
            <h3>Our Vision</h3>
            <p>
              To be Hyderabad’s most trusted cab service, known for reliability,
              comfort, and exceptional customer experiences — making every
              journey smooth, safe, and memorable.
            </p>
          </div>
          <div className={classes.visionDiv}>
            <h3>Our Mission</h3>
            <p>
              To make travel easy, reliable, and enjoyable for everyone —
              through well-maintained vehicles, courteous drivers, and
              transparent pricing.
            </p>
          </div>
          <p className={classes.visionContent}>
            Welcome to Happy Travels, your trusted travel partner in Hyderabad.
            With over 5 years of experience, we’ve proudly served thousands of
            happy customers — offering safe, reliable, and comfortable rides for
            every travel need.
          </p>
          <p className={classes.visionContent}>
            Whether it’s an airport transfer, a Hyderabad city tour, an
            outstation trip, or a Srisailam temple package, our goal is to make
            your journey smooth, joyful, and stress-free.
          </p>
          <p className={classes.visionContent}>
            At Happy Travels, we don’t just drive — we deliver trust, comfort, and
            punctuality. Every trip is managed by professional drivers and
            supported by a friendly customer care team, ensuring you always
            travel with peace of mind.
          </p>
        </div>
        <img className={classes.visionImg} src={aboutPageImg} alt="about page image"/>
      </div>
    </div>
  );
};
export default About;
