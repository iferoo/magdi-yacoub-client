import React from "react";
import {
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
import SearchPatient from "./components/patients/SearchPatient";
import EditPatient from "./components/patients/EditPatient";
import AddPatient from "./components/patients/AddPatient";
import AppLayout from "./layout/AppLayout";



export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Analytics />} />
          <Route path="patients" element={<Patients />}>
            <Route index element={<SearchPatient />} />
            <Route path="edit-patient" element={<EditPatient />} />
            <Route path="add-patient" element={<AddPatient />} />
          </Route>
          <Route path="rooms" element={<Rooms />} />
          <Route path="staff" element={<Staff />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
