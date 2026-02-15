import { useNavigate } from "react-router-dom";

const Header = () => {
    
const navigate = useNavigate();
    return (
        <div style={{display: 'flex', backgroundColor: 'lightgray', padding: '10px', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <h1>Happy Travels</h1>
        <ul style={{display: 'flex', justifyContent: 'space-around', width: '50%'}}>
            <li style={{cursor: 'pointer'}} onClick={() => navigate("/")}>Home</li>
            <li style={{cursor: 'pointer'}} onClick={() => navigate("/about")}>About</li>
            <li style={{cursor: 'pointer'}} onClick={() => navigate("/ourcars")}>Our Cars</li>
            <li style={{cursor: 'pointer'}} onClick={() => navigate("/services")}>Services</li>
            <li style={{cursor: 'pointer'}} onClick={() => navigate("/contact")}>Contact</li>    
        </ul>
      </div>
    )
}

export default Header;