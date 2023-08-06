import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

import './styles.css';

const position = [51.505, -0.09]
const MapModal = ({ latitude, longitude, modalVisible, closeModal }) => {

    const position = [latitude, longitude]
    
  return (
    <div>
      {modalVisible && (
        <div className="modal">
          <div onClick={closeModal} className="overlay">
            <div className="modal-content">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={position}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker> */}
            </MapContainer>
              <button className='close-button' onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapModal;

