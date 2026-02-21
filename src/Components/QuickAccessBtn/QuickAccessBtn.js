import { useState } from "react";
import classes from "./QuickAccessBtn.module.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineMessage } from "react-icons/md";

const QuickAccessBtn = () => {
  const [showAllIcons, setShowAllIcons] = useState(false);
  const handleClick = () => {
    const phoneNumber = "917795375321";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <div className={classes.quickAccessBtnDiv}>
      <BsWhatsapp
        onClick={handleClick}
        className={
          showAllIcons ? classes.whatsAppBtn : classes.whatsAppBtnHidden
        }
      />
      <a href="tel:7795375321">
        <FaPhoneAlt
          className={showAllIcons ? classes.phoneBtn : classes.phoneBtnHidden}
        />
      </a>
      <ImCancelCircle
        onClick={() => setShowAllIcons(false)}
        className={showAllIcons ? classes.cancelBtn : classes.cancelBtnHidden}
      />
      <MdOutlineMessage
        onClick={() => setShowAllIcons(true)}
        className={showAllIcons ? classes.messageBtnHidden : classes.messageBtn}
      />
    </div>
  );
};

export default QuickAccessBtn;
