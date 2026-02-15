import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setSidebarOpen(false); // close sidebar after click
  };

  return (
    <>
      <div className={classes.headerDiv}>
        <h1>Happy Travels</h1>

        <div onClick={() => setSidebarOpen(true)} className={classes.menuBox}>
          ☰ MENU
        </div>

        {/* Desktop Nav */}
        <ul className={classes.navList}>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/ourcars")}>Cars</li>
          <li onClick={() => navigate("/services")}>Services</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className={classes.overlay}
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`${classes.sideBar} ${sidebarOpen ? classes.active : ""}`}
      >
        <div className={classes.closeBtn} onClick={() => setSidebarOpen(false)}>
          ✖
        </div>

        <ul className={classes.sideNavList}>
          <li onClick={() => handleNavigate("/")}>Home</li>
          <li onClick={() => handleNavigate("/about")}>About</li>
          <li onClick={() => handleNavigate("/ourcars")}>Our Cars</li>
          <li onClick={() => handleNavigate("/services")}>Services</li>
          <li onClick={() => handleNavigate("/contact")}>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
