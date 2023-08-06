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
        <div className='input-group'>
            <h2>Add a New Contact</h2>
            <form onSubmit ={handleSubmit}>
                <label className= "input-group__label">Contact Name:</label>
                <input type="text" className= "input-group__input" required value={ name } onChange={(e) => setName(e.target.value)}/>

                <label className= "input-group__label">Phone Number: </label>
                <input type="tel" className= "input-group__input" required value={ phone }  onChange={(e) => setPhone(e.target.value)}/>

                <label className= "input-group__label">Latitude: </label>
                <input type="text" className= "input-group__input" maxLength="10" required value={ latitude }  onChange={(e) => setLatitude(e.target.value)}/>

                <label className= "input-group__label">Longitude: </label>
                <input type="text" className= "input-group__input" maxLength="11" required value={ longitude } onChange={(e) => setLongitude(e.target.value)}/>

                <div className='button-container'>
                    <button onClick={navigateHome}>Save Contact</button>
                </div>
            </form>
            
        </div>
    );
}

export default ContactForm;
