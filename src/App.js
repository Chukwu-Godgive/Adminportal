// React Dependencies should be imported here.
import React from 'react'
import Home from './Pages/Dashboard/Home/Home';
// import Teams from './Pages/Dashboard/Teams/Teams';
// import Clients from './Pages/Dashboard/Clients/Clients'
import './Styles/App.css';



// Code functions starts from here
function App() {
  return (
    <div className='container'>
      <Home />
      {/* <Teams /> */}
      {/* <Clients /> */}

    </div>
  );
}
export default App;