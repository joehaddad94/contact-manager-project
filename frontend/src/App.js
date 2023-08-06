import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/index';
import ContactList from './Components/ContactList';


import './App.css';
import ContactForm from './Components/ContactForm';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path = "/">
              <Route index element = {<ContactList/>}/>
              <Route path = "/xyz" element = {<ContactForm/>}/>
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;