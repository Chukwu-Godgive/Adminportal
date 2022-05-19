// React Dependencies should be imported here.
import React from 'react'
// import Teams from './Pages/Dashboard/Teams/Teams';
import './Styles/App.css';
import Home from './Pages/Dashboard/Home/Home';


// Code functions starts from here
function App() {
  return (
    <div className='container'>
      <Home />
      {/* <Teams /> */}
    </div>
  );
}
export default App;