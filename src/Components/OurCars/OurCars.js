import { Button } from "react-bootstrap";
import classes from "../Home/Home.module.css";
import { useState } from "react";
import dzire from "../../assets/suzuki dzire.jpeg";
import amaze from "../../assets/honda amaze.jpeg";
import ertiga from "../../assets/ertiga.jpeg";
import crysta from "../../assets/crysta.jpeg";
import hycross from "../../assets/hycross.jpeg";
import tempo from "../../assets/17 seater.jpeg";

const OurCars = () => {
    
      const [showCarDetails, setShowCarDetails] = useState("");
  return (
    <div className={classes.ourCarsDiv}>
      <h3>Our Cars</h3>
      <div
        className={
          showCarDetails === "" ? classes.noCarDetails : classes.showCarDetails
        }
      >
        <div>
          <div
            className={classes.closeButton}
            onClick={() => setShowCarDetails("")}
          >
            X
          </div>
          <h4>{showCarDetails.model}</h4>
          <p>
            Rs. {showCarDetails.price} per KM for outstation trips (Min 100 kms
            travels). Excluding toll charges
          </p>
          <Button>Contact Now</Button>
        </div>
      </div>
      <div className={classes.ourCarsImgsDiv}>
        <div
          onClick={() =>
            setShowCarDetails({ model: "Maruti Suzuki Dzire", price: "14" })
          }
          className={classes.carImgs}
        >
          <p>starts from Rs. 2,500</p>
          <img src={dzire} alt="dzire" />
          <p className={classes.carModel}>Maruti Suzuki Dzire</p>
        </div>
        <div
          onClick={() =>
            setShowCarDetails({ model: "Honda Amaze", price: "14" })
          }
          className={classes.carImgs}
        >
          <p>starts from Rs. 2,500</p>
          <img src={amaze} alt="amaze" />
          <p className={classes.carModel}>Honda Amaze</p>
        </div>
        <div
          onClick={() =>
            setShowCarDetails({ model: "Maruti Suzuki Ertiga", price: "18" })
          }
          className={classes.carImgs}
        >
          <p>starts from Rs. 2,500</p>
          <img src={ertiga} alt="ertiga" />
          <p className={classes.carModel}>Maruti Suzuki Ertiga</p>
        </div>
        <div
          onClick={() =>
            setShowCarDetails({ model: "Toyota Innova Crysta", price: "20" })
          }
          className={classes.carImgs}
        >
          <p>starts from Rs. 2,500</p>
          <img src={crysta} alt="crysta" />
          <p className={classes.carModel}>Toyota Innova Crysta</p>
        </div>
        <div
          onClick={() =>
            setShowCarDetails({ model: "Toyota Innova Hycross", price: "20" })
          }
          className={classes.carImgs}
        >
          <p>starts from Rs. 2,500</p>
          <img src={hycross} alt="hycross" />
          <p className={classes.carModel}>Toyota Innova Hycross</p>
        </div>
        <div
          onClick={() =>
            setShowCarDetails({
              model: "17 seater Tempo Traveller",
              price: "35",
            })
          }
          className={classes.carImgs}
        >
          <p>starts from Rs. 2,500</p>
          <img src={tempo} alt="tempo" />
          <p className={classes.carModel}>17 seater Tempo Traveller</p>
        </div>
      </div>
    </div>
  );
};
export default OurCars;
