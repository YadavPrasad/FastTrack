import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { Icon } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});



const Order = () => {
  const { orderID } = useParams();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    axios.get(`https://fasttrack-1cl0.onrender.com/order/${orderID}`)
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
          <MapContainer center={[orderData.currentLocation.lat, orderData.currentLocation.lng]} zoom={5} style={{ height: '400px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            <Marker position={[orderData.currentLocation.lat, orderData.currentLocation.lng]}>
              <Popup>Current Location</Popup>
            </Marker>

            {orderData.destination && orderData.destination.lat && orderData.destination.lng && (
              <Marker position={[orderData.destination.lat, orderData.destination.lng]}>
                <Popup>Destination</Popup>
              </Marker>
            )}
          </MapContainer>
        </>
      ) : (
        <p>Order ID doesn't exists.</p>
      )}
    </div>
  );
};

export default Order;
