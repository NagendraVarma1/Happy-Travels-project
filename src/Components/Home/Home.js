import { Button, Card, Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/img 1 of cars.jpeg";
import img2 from "../../assets/img 2.jpeg";
import img3 from "../../assets/img 3.jpeg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cartoonImg from "../../assets/Happy travels at the airport.png";
import classes from "./Home.module.css";
import parkingCarImg from "../../assets/parking cars.jpeg";
import carFront1Img from "../../assets/car front.jpeg";
import carFront2Img from "../../assets/car front 2.jpeg";
import carView from "../../assets/car view from inside.jpeg";
import parkingCarImg2 from "../../assets/parking cars 2.jpeg";

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
    <div className={classes.heroSection}>
      <img
        src={images[currentImage]}
        alt="Travel"
        className={classes.carouselImage}
      />
      <div className={classes.heroContent}>
        <h1 >Happy Travels</h1>
        <h3>
          Your Trusted Cab Service in Hyderabad
        </h3>
        <div>
          <p>
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
      <div className={classes.ourServicesDiv}>
        <h3 className={classes.ourServicesHeading}>Our Services at a Glance</h3>
        <div className={classes.servicesCardsDiv}
        >
          <Card className={classes.servicesCards}>
            <Card.Body>
              <Card.Title>Airport Cabs Hyderabad</Card.Title>
              <Card.Text>
                Say goodbye to last-minute travel worries. Our Hyderabad Airport
                taxi service ensures on-time pickup and drop, round the clock.
                From solo travelers to family transfers — our professional
                drivers make airport rides quick and easy.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={classes.servicesCards}>
            <Card.Body>
              <Card.Title>Outstation Cab Service</Card.Title>
              <Card.Text>
                Travel beyond city limits with comfort and convenience. Whether
                it’s a family trip, business visit, or weekend getaway, our
                outstation cabs from Hyderabad make long drives memorable.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={classes.servicesCards}>
            <Card.Body>
              <Card.Title>Hyderabad Sightseeing Cabs</Card.Title>
              <Card.Text>
                Discover the beauty of Hyderabad with our local sightseeing taxi
                packages. Visit top attractions like Charminar, Golconda Fort,
                Ramoji Film City, and more — all with experienced local drivers
                who know the city best.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={classes.servicesCards}>
            <Card.Body>
              <Card.Title>Hyderabad to Srisailam Packages</Card.Title>
              <Card.Text>
                Experience spiritual peace with our Srisailam cab packages.
                Choose from 1-day or 2-day options — all inclusive of tolls,
                parking, driver batta, and taxes. We handle the journey so you
                can focus on devotion.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className={classes.experienceMainDiv}>
        <div className={classes.experienceDiv1}>
          <h1 className={classes.experienceHeading}>
            Hyderabad’s trusted travel partner for every journey.
          </h1>
          <img
            src={parkingCarImg}
            alt="parking cars"
            className={classes.parkingCarImg}
          />
        </div>
        <div className={classes.experienceDiv2}>
          <div className={classes.experienceImgsDiv}>
            <img
              src={carFront1Img}
              alt="car front 1"
              className={classes.experienceImgs}
            />
            <img
              src={carFront2Img}
              alt="car front 2"
              className={classes.experienceImgs}
            />
          </div>
          <p className={classes.experiencePara}>
            Welcome to Happy Travels — Hyderabad’s trusted travel partner for
            every journey. With over 3 years of experience, we’ve built our
            reputation on reliability, comfort, and transparent service. Whether
            it’s an airport transfer, a city tour, an outstation trip, or a
            spiritual visit to Srisailam, we make every mile smooth and
            stress-free.
          </p>
          <p className={classes.experiencePara}>
            Our mission is simple — to provide safe, punctual, and affordable
            rides that make travel easy for everyone.
          </p>
          <p className={classes.experiencePara}>
            From clean, well-maintained cars to friendly and professional
            driver, every ride with Happy Travels is designed to deliver
            comfort, convenience, and peace of mind.
          </p>
        </div>
      </div>
      <div className={classes.whyUsDiv}>
        <Container className={classes.whyUsImgDiv}>
          <Row>
            <Col>
              <img
                src={carView}
                alt="car view"
                className={classes.whyUsRow1Imgs}
              />
            </Col>
            <Col>
              <img
                src={parkingCarImg2}
                alt="parking cars 2"
                className={classes.whyUsRow1Imgs}
              />
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <img
                src={img3}
                alt="car view 2"
                className={classes.whyUsRow2Imgs}
              />
            </Col>
          </Row>
        </Container>
        <div className={classes.whyUsParaDiv}>
          <h1>Why Choose Happy Travels?</h1>
          <p className={classes.whyUsPara}>
            At Happy Travels, we believe every ride should be more than just
            travel — it should be smooth, safe, and stress-free. Here’s what
            makes thousands of customers choose us every time.
          </p>
          <Card className="p-3 shadow mt-5">
            <h3>Reliable Service, Every Time</h3>
            <p className={classes.whyUsPara}>
              We value your time. That’s why our drivers are always punctual and
              professional — ensuring your pickup is never delayed.
            </p>
          </Card>
          <Card className="p-3 shadow mt-5">
            <h3>Transparent Pricing</h3>
            <p className={classes.whyUsPara}>
              No hidden costs or last-minute surprises. What you see is what you
              pay — honest fares, clear packages, and complete satisfaction.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
