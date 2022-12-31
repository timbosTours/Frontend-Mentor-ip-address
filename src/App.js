import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [returnedData, setReturnedData] = useState(null)
  
  return (<> 
    <Router>
    <Navbar setReturnedData={setReturnedData} />
    <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/search' element={ <Search returnedData={returnedData}/>} />
      </Routes>
    </Router>
  </>
  );
}


export default App;
