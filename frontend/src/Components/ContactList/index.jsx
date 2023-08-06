import { useState, useEffect } from 'react';
import ContactCard from '../ContactCard/index';
import './styles.css';
import useFetch from '../../useFetch';

const ContactList = () => {
  const { data: cards, error } = useFetch('http://127.0.0.1:8000/api/get_all_contacts');
  const [contactsData, setContactsData] = useState([]);
  
  useEffect(() => {
    if (cards) {
      setContactsData(cards.contacts);
    }
  }, [cards]);
  
  const handleDeleteContact = (id) => {
    fetch('http://127.0.0.1:8000/api/delete_contact/' + id, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not delete');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setContactsData((prevData) => prevData.filter((contact) => contact.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <section>
      <div className="card-container">
        <h1>All Contacts</h1>
        <ContactCard cards={contactsData} handleDeleteContact={handleDeleteContact} />
      </div>
    </section>
  );
};

  export default ContactList;