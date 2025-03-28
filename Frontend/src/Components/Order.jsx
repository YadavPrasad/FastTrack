import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { Icon } from 'leaflet';

const Order = ({ isLoggedIn, username }) => {
  const { orderID } = useParams();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(null);
  
  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login"); 
      return;
    }

    axios.get(`https://fasttrack-1cl0.onrender.com/order/${orderID}?username=${username}`)
      .then(response => {
        if (response.data.username !== username) {
          alert("Unauthorized access! This order does not belong to you.");
          navigate("/"); 
        } else {
          setOrderData(response.data);
        }
      })
      .catch(error => console.error("Error fetching order:", error));
  }, [isLoggedIn, username, orderID, navigate]);

  return (
    <div>
      <h1>Order Tracking</h1>
      {orderData ? (
        <>
          <h2>Order ID: {orderData.orderID}</h2>
          <h3>Status: {orderData.status}</h3>
          <MapContainer center={[orderData.currentLocation.lat, orderData.currentLocation.lng]} zoom={5} style={{ height: '400px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            <Marker position={[orderData.currentLocation.lat, orderData.currentLocation.lng]} icon={customIcon}>
              <Popup>Current Location</Popup>
            </Marker>

            {orderData.destination && orderData.destination.lat && orderData.destination.lng && (
              <Marker position={[orderData.destination.lat, orderData.destination.lng]} icon={customIcon}>
                <Popup>Destination</Popup>
              </Marker>
            )}
          </MapContainer>
        </>
      ) : (
        <p>Order ID doesn't exist or you are not authorized to view this order.</p>
      )}
    </div>
  );
};

export default Order;
