import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignupPage from './pages/SignUp';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/layout" element={<Layout />} />
        {/* <Route path="/carlist" element={<CarList />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
