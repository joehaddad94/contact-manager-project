import React from 'react';
import './styles.css';

const ContactCard = ({ cards, handleDeleteContact  }) => {

  return (
    <section>
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
                  <img src="../../../public/map-icon.png" alt="Map Icon" />
                  </div>
                  
                  <ul>
                    <li>Latitude: <span>{card.latitude}</span> </li>
                    <li>Longitude: <span>{card.longitude}</span></li>
                  </ul>
                  {/* <button className='edit-button'>Edit Contact</button> */}
                  <button className='delete-button' onClick={() => handleDeleteContact(card.id)}>Delete Contact</button>
                  {/* <button className='delete-button'>Delete Contact</button> */}
                </div>
              ))
            ) : (
              <h2>No Contacts To Display</h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
