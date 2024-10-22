
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Box } from '@mui/material'
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  const { user } = useSelector(state => state.user)
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <ToastContainer />
      <Box component="section" sx={{ height: "90vh", width: "100vw", display: "flex" }}>
        <Box component="article" sx={{ width: "100%" }}>
          <Routes>
              <Route exact path='register' element={<Register />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/' element={<Login />} />
              <Route exact path='/dashboard' element={<Dashboard />} />
          </Routes >
        </Box>
      </Box>
    </>
  );
}

export default App;
