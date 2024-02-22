import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Result from "../Result";

const AllRoutes = () => {
  return (
    // All routes
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default AllRoutes;
