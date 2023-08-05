import React from 'react';
import { useState } from 'react';

import './styles.css'

const Index = () => {

    const [cards] = useState([
        {   
            id: '1',
            name: 'Joe Haddad',
            phone: '71225486',
            latitude: 'latitude',
            longitude: 'longitude'
        },
        {   
            id: '2',
            name: 'Joe Haddad',
            phone: '71225486',
            latitude: 'latitude',
            longitude: 'longitude'
        },
        {   
            id: '3',
            name: 'Joe Haddad',
            phone: '71225486',
            latitude: 'latitude',
            longitude: 'longitude'
        },
        {
            id: '4',
            name: 'Joe Haddad',
            phone: '71225486',
            latitude: 'latitude',
            longitude: 'longitude'
        },
        {   
            id: '5',
            name: 'Joe Haddad',
            phone: '71225486',
            latitude: 'latitude',
            longitude: 'longitude'
        },
        {   
            id: '6',
            name: 'Joe Haddad',
            phone: '71225486',
            latitude: 'latitude',
            longitude: 'longitude'
        }, 
        {   
            id: '7',
            name: 'Joe Haddad',
            phone: '71225486',
            latitude: 'latitude',
            longitude: 'longitude'
        }
    ]);

    return (
        <section>
        <div className="card-container">
            <div className="cards">
                <div className="card">
                {
                    cards.map((card) => (
                        <div className='card-preview' key={card.id}>
                        <h2>{ card.name }</h2>
                        <h3>Phone Number: <span>{ card.phone }</span></h3>
                    <h4>Address:</h4>
                    <ul>
                        <li>Latitude: <span>{ card.latitude }</span> </li>
                        <li>Longitude: <span>{ card.longitude }</span></li>
                    </ul>
                    <button className='edit-button'>Edit Contact</button>
                    <button className='delete-button'>Delete Contact</button>
                        </div>
                    ))
                    
                }
                </div>
            </div>
        </div>
            
        </section>
    );
}

export default Index;
