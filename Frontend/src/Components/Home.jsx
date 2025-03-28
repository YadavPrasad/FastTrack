import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

const Home = () => {
  const [orderID, setOrderID] = useState("");  
  const navigate = useNavigate();

  const handleTrackOrder = () => {
    if (orderID.trim() !== "") {
      navigate(`/order/${orderID}`);  
    }
  };

  return (
    <div>
      <center><h1 className="Header">Track Your Location with Ease</h1></center>
      <section className="Home">
        <div className="Forms">
          <h1>Enter</h1>
          <input 
            type="text" 
            placeholder="Enter Order ID" 
            value={orderID} 
            onChange={(e) => setOrderID(e.target.value)} 
          />
          <button onClick={handleTrackOrder}>Track Order</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
