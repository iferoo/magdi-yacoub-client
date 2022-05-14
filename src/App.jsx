import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PatientsPage from "./components/patients/PatientsPage";
import ViewPatient from "./components/patients/ViewPatient";
import AddPatient from "./components/patients/AddPatient";

import StaffPage from "./components/staff/StaffPage";
import ViewStaff from "./components/staff/ViewStaff";
import UpdateStaff from "./components/staff/UpdateStaff";
import AddStaff from "./components/staff/AddStaff";

import RoomsPage from "./components/rooms/RoomsPage";
import ViewRooms from "./components/rooms/ViewRooms";
import UpdateRooms from "./components/rooms/UpdateRooms";
import AddRooms from "./components/rooms/AddRooms";

import LogIn from "./components/sign/LogIn";
import SignUp from "./components/sign/SignUp";
import ForgetPassword from "./components/sign/ForgetPassword";
import SignPage from "./pages/SignPages";

import AppPages from "./pages/AppPages";

import NotFoundPage from "./pages/NotFoundPage";
import Analytics from "./components/analytics/AnalyticsPage";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = sessionStorage.getItem("isLogin");

    if (isLogin !== true) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppPages />}>
          <Route index element={<Navigate to="patients" replace />} />
          <Route path="patients" element={<PatientsPage />}>
            <Route index element={<ViewPatient />} />
            <Route path="add" element={<AddPatient />} />
          </Route>
          <Route path="rooms" element={<RoomsPage />}>
            <Route index element={<ViewRooms />} />
            <Route path="Update" element={<UpdateRooms />} />
            <Route path="add" element={<AddRooms />} />
          </Route>
          <Route path="staff" element={<StaffPage />}>
            <Route index element={<ViewStaff />} />
            <Route path="Update" element={<UpdateStaff />} />
            <Route path="add" element={<AddStaff />} />
          </Route>
          <Route path="analytics" element={<Analytics />} />
        </Route>
        <Route path="/" element={<SignPage />}>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
