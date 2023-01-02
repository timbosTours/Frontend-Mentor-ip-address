import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// lazy load to save project size
const Home = lazy(() => import('./pages/Home'))
const Search = lazy(() => import('./pages/Search'))


function App() {
  const [returnedData, setReturnedData] = useState({})
  
  return (<> 
    <Router>
      <Navbar setReturnedData={setReturnedData} />
      <Suspense fallback={<h1>LOADING...</h1>}>
    <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/search' element={ <Search returnedData={returnedData}/>} />
        </Routes>
      </Suspense>
    </Router>
  </>
  );
}


export default App;
