import React from 'react';
import { useNavigate } from 'react-router-dom'

import './styles.css'

const ContactForm = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
      };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='add'>
            <h2>Add a New Contact</h2>
            <form onSubmit ={handleSubmit}>
                <label>Contact Name:</label>
                <input type="text" required value=""/>

                <label>Phone Number: </label>
                <input type="tel" required value=""/>

                <label>Latitude: </label>
                <input type="text" required value=""/>

                <label>Longitude: </label>
                <input type="text" required value=""/>

                <button onClick={navigateHome}>Add Blog</button>
            </form>
            
        </div>
    );
}

export default ContactForm;
