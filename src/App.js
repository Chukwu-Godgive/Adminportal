// React Dependencies should be imported here.
import React from 'react'

// CSS Files should be imported here.
import './Styles/App.css';

// Components and Pages should be imported here.
import Home from './Pages/Dashboard/Home/Home';

// Code functions starts from here
function App() {
  return (
    <div className='container'>
      <Home />
    </div>
  );
}
export default App;