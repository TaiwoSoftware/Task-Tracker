import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import SignUp from './components/SignUp';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
