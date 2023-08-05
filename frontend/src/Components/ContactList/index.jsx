import { useState } from 'react';

import ContactCard from '../ContactCard/index'
import './styles.css';

const Index = () => { 

    return (
      <section>
        <div className="card-container">
          <h1>All Contacts</h1>
              <ContactCard/>
        </div>
      </section>
    );
  }

  export default Index;