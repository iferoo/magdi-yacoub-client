import React from "react";
import Sidebar from "../../components/Sidebar";
import Patients from "../../components/Patients";


function HomePage() {
  return (
    <div>
      <Sidebar />
      <Patients />
    </div>
  );
}

export default HomePage;
