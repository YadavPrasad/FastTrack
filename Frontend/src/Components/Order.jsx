import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const Order = () => {
  const { orderID } = useParams(); 
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3002/order/${orderID}`)
      .then(response => setOrderData(response.data))
      .catch(error => console.error("Error fetching order:", error));
  }, [orderID]);

  return (
    <div>
      <h1>Order Tracking</h1>
      {orderData ? (
        <>
          <h2>Order ID: {orderData.orderID}</h2>
          <h3>Status: {orderData.status}</h3>
          <MapContainer center={[orderData.currentLocation.lat, orderData.currentLocation.lng]} zoom={13} style={{ height: '400px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[orderData.currentLocation.lat, orderData.currentLocation.lng]}>
              <Popup>Current Location</Popup>
            </Marker>
            <Marker position={[orderData.destination.lat, orderData.destination.lng]}>
              <Popup>Destination</Popup>
            </Marker>
          </MapContainer>
        </>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default Order;
