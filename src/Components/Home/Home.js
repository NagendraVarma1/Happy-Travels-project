import { Button } from "react-bootstrap";
import img1 from "../../assets/img 1 of cars.jpeg";
import img2 from "../../assets/img 2.jpeg"
import img3 from "../../assets/img 3.jpeg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    let images = [img1, img2, img3];
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => prevImage === images.length - 1 ? 0 : prevImage + 1);
        }, 3000);
        return () => clearInterval(interval);
}, []);
  return (
    <div>
      <img
        src={images[currentImage]}
        alt="Travel"
        style={{
          width: "90%",
          height: "600px",
          objectFit: "cover",
          marginLeft: "5%",
          marginTop: "15px",
          borderRadius: "10px",
          filter: "grayscale(20%) brightness(80%)",
        }}
      />
      <div>
        <h2
          style={{
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "2 rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          Happy Travels
        </h2>
        <h3
          style={{
            width: "60%",
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "5.5rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            textAlign: "center",
          }}
        >
          Your Trusted Cab Service in Hyderabad
        </h3>
        <div>
          <p
            style={{
              width: "60%",
              position: "absolute",
              top: "80%",
              left: "10%",
              transform: "translate(0, -50%)",
              color: "white",
              fontSize: "1.5rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            For all your travel requirements, Orizon Cabs is your one-stop
            solution. Whether you need an airport transfer, want to explore
            Hyderabad’s local attractions, plan an outstation trip, or book a
            Hyderabad to Srisailam cab package, we have you covered.
          </p>
          <Button onClick={() => {navigate('/services')}} style={{position: 'absolute', top: '77%', left: '80%'}}>Explore</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
