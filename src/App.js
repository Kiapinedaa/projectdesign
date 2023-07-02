import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FirstPage from './pages/FirstPage';
import User from './pages/User';
import History from './pages/History';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='home' element={<Home />}/>
          <Route path='firstpage' element={<FirstPage />} />
          <Route path='user' element={<User />} />
          <Route path='history' element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
