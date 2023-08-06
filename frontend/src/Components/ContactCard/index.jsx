import React from 'react';
import { useState } from 'react';
import MapIcon from '../../images/map-icon.png';
import MapModal from '../MapModal/index'
import './styles.css';

const ContactCard = ({ cards, handleDeleteContact  }) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLatitude, setSelectedLatitude] = useState(null);
  const [selectedLongitude, setSelectedLongitude] = useState(null);

  const openModal = (latitude, longitude) => {
    setSelectedLatitude(latitude);
    setSelectedLongitude(longitude);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <section >
      <div className="card-container">

        <div className="cards">
          <div className="card">
            {Array.isArray(cards) ? (
              cards.map((card) => (
                <div className='card-preview' key={card.id}>
                  <h2>{card.name}</h2>
                  <h3>Phone Number: <br/><span>{card.phone}</span></h3>
                  <div className='address-img-container'>
                  <h4>Address: </h4>                
                  <img className='map-icon' src={MapIcon} alt="Map Icon" onClick = {() => openModal(card.latitude, card.longitude)}/>
                  </div>
                  <ul>
                    <li>Latitude: <span>{card.latitude}</span> </li>
                    <li>Longitude: <span>{card.longitude}</span></li>
                  </ul>
                  {/* <button className='edit-button'>Edit Contact</button> */}
                  <button className='delete-button' onClick={() => handleDeleteContact(card.id)}>Delete Contact</button>
                </div>
              ))
            ) : (
              <h2>No Contacts To Display</h2>
            )}
          </div>
        </div>
      </div>
       {/* Modal */}
       {modalVisible && <MapModal closeModal={closeModal} modalVisible={modalVisible} latitude={selectedLatitude} longitude={selectedLongitude} />}
    </section>             
  );
};

export default ContactCard;
