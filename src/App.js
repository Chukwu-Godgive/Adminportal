// React Dependencies should be imported here.
import { BrowserRouter,
         Routes,
         Route } from 'react-router-dom';
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Dashboard/Home/Home';
import Teams from './Pages/Dashboard/Teams/Teams';
import Clients from './Pages/Dashboard/Clients/Clients'
import './Styles/App.css';



// Code functions starts from here
function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/teams' element={ <Teams /> } />
          <Route path='/clients' element={ <Clients /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;