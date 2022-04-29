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

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<SignIn/>} />
          <Route exact path="/" element={<><Sidebar/><Patients/></>}/>
          <Route exact path="/patients" element={<><Sidebar/><Patients/></>}/>
          <Route exact path="/rooms" element={<><Sidebar/><Rooms/></>}/>
          <Route exact path="/staff" element={<><Sidebar/><Staff/></>}/>
          <Route exact path="/analytics" element={<><Sidebar/><Analytics/></>}/>
        </Routes>
      </Router>
    </div>
  );
}
