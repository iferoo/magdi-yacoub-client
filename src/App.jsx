import React from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SearchPatient from "./components/patients/SearchPatient";
import EditPatient from "./components/patients/EditPatient";
import AddPatient from "./components/patients/AddPatient";

import Patients from "./pages/PatientsPage";
import Rooms from "./pages/RoomsPage";
import Staff from "./pages/StaffPage";
import Analytics from "./pages/AnalyticsPage";
import SignIn from "./pages/LogInPage";

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
