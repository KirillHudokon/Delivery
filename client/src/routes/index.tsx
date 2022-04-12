import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing, NotFound } from "../pages";

const PagesRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default PagesRoutes;