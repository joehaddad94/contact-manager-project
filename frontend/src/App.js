import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/index';
import ContactList from './Components/ContactList';


import './App.css';
import ContactForm from './Components/ContactForm';
import MapModal from './Components/MapModal';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path = "/">
              <Route index element = {<ContactList/>}/>
              <Route path = "/ContactForm" element = {<ContactForm/>}/>
              <Route path = "/MapModal" element = {<MapModal/>}/>
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;