import { useState, useEffect } from 'react';

import ContactCard from '../ContactCard/index'
import './styles.css';
import useFetch from '../../useFetch';

const ContactList = () => { 

  const {data: cards, error} = useFetch('http://127.0.0.1:8000/api/get_all_contacts')

  // const [cards, setCards] = useState([]);

    // useEffect(() =>{
    //   fetch('http://127.0.0.1:8000/api/get_all_contacts', {
    //     headers: {
    //       'Accept': 'application/json'
    //     }
    //   })
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(data => {
    //     console.log(data)
    //     setCards(data)
    //   })
    // }, []);

    return (
      <section>
        <div className="card-container">
          <h1>All Contacts</h1>
             {cards && <ContactCard cards={cards.contacts}/>}
        </div>
      </section>
    );
  }

  export default ContactList;