import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import './styles.css'

const ContactForm = () => {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [latitude,setLatitude] = useState('');
    const [longitude,setLongitude] = useState('');

    const navigate = useNavigate();

    const navigateHome = () => {
        setTimeout(()=> {
            navigate('/');
        },1000)
        
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {name, phone, latitude, longitude}
        console.log(data)

        fetch('http://127.0.0.1:8000/api/add_contact' ,
            {method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
    })
    .then(res => {
        if(!res.ok) {
            throw Error('could not fetch the data for that resource');
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    
    }

    return (
        <div className='add'>
            <h2>Add a New Contact</h2>
            <form onSubmit ={handleSubmit}>
                <label>Contact Name:</label>
                <input type="text" required value={ name } onChange={(e) => setName(e.target.value)}/>

                <label>Phone Number: </label>
                <input type="tel" required value={ phone }  onChange={(e) => setPhone(e.target.value)}/>

                <label>Latitude: </label>
                <input type="text" required value={ latitude }  onChange={(e) => setLatitude(e.target.value)}/>

                <label>Longitude: </label>
                <input type="text" required value={ longitude } onChange={(e) => setLongitude(e.target.value)}/>

                <button onClick={navigateHome}>Add Contact</button>
            </form>
            
        </div>
    );
}

export default ContactForm;
