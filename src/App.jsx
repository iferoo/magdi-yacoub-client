import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Patients from "./pages/Patients";
import Rooms from "./pages/Rooms";
import Staff from './pages/Staff'
import Analytics from './pages/Analytics'
import SignIn from "./components/SignIn";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<SignIn/>} />
          <Route path="/" element={<><Sidebar/><Patients/></>}/>
          <Route path="/patients" element={<><Sidebar/><Patients/></>}/>
          <Route path="/rooms" element={<><Sidebar/><Rooms/></>}/>
          <Route path="/staff" element={<><Sidebar/><Staff/></>}/>
          <Route path="/analytics" element={<><Sidebar/><Analytics/></>}/>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}
