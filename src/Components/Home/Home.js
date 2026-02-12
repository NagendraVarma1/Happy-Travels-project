import { Button } from "react-bootstrap";
import img1 from "../../assets/img 1 of cars.jpeg";
import img2 from "../../assets/img 2.jpeg";
import img3 from "../../assets/img 3.jpeg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cartoonImg from "../../assets/Happy travels at the airport.png";
import classes from "./Home.module.css";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  let images = [img1, img2, img3];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <img
        src={images[currentImage]}
        alt="Travel"
        className={classes.carouselImage}
      />
      <div>
        <h2 className={classes.happyTravels}>Happy Travels</h2>
        <h3 className={classes.h3Text}>
          Your Trusted Cab Service in Hyderabad
        </h3>
        <div>
          <p className={classes.p1Text}>
            For all your travel requirements, Happy Travels is your one-stop
            solution. Whether you need an airport transfer, want to explore
            Hyderabad’s local attractions, plan an outstation trip, or book a
            Hyderabad to Srisailam cab package, we have you covered.
          </p>
          <Button
            onClick={() => {
              navigate("/services");
            }}
            className={classes.exploreButton}
          >
            Explore
          </Button>
        </div>
      </div>
      <div>
        <h3 className={classes.onTimeHeading}>
          Always On Time. Always Happy Travels
        </h3>
        <div className={classes.onTimeDiv}>
          <img
            className={classes.cartoonImage}
            src={cartoonImg}
            alt="cartoon"
          />
          <p className={classes.onTimeText}>
            Skip the struggle of finding a cab — our drivers are already waiting
            when you land. From airport gates to your destination — seamless,
            safe, and stress-free. Hyderabad Airport Pickups Made Easy.
          </p>
          <p className={classes.onTimeText}>
            No waiting, no confusion — just smooth, on-time airport transfers.
            Step off the plane and straight into comfort with Happy Travels.
            Land. Relax. Ride.
          </p>
          <Button
            onClick={() => {
              navigate("/contact");
            }}
          >
            Call Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
