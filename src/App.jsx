import React from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SearchPatient from "./components/patients/SearchPatient";

import Patients from "./pages/PatientsPage";
import Rooms from "./pages/RoomsPage";
import Staff from "./pages/StaffPage";
import Analytics from "./pages/AnalyticsPage";
import SignIn from "./pages/LogInPage";
import NotFoundPage from "./pages/NotFoundPage";

import AddPatient from "./components/patients/AddPatient";

import AddStaff from "./components/staff/AddStaff";
import UpdateStaff from "./components/staff/UpdateStaff";
import ViewStaff from "./components/staff/ViewStaff";

import AddRooms from "./components/rooms/AddRooms";
import UpdateRooms from "./components/rooms/UpdateRooms";
import ViewRooms from "./components/rooms/ViewRooms";

import AppLayout from "./layout/AppLayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Analytics />} />
          <Route path="patients" element={<Patients />}>
            <Route index element={<SearchPatient />} />
            <Route path="add" element={<AddPatient />} />
          </Route>
          <Route path="rooms" element={<Rooms />}>
            <Route index element={<ViewRooms />} />
            <Route path="Update" element={<UpdateRooms />} />
            <Route path="add" element={<AddRooms />} />
          </Route>
          <Route path="staff" element={<Staff />}>
            <Route index element={<ViewStaff />} />
            <Route path="Update" element={<UpdateStaff />} />
            <Route path="add" element={<AddStaff />} />
          </Route>
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
