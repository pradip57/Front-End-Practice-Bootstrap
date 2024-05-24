import React from "react";
import { Route, Routes } from "react-router-dom";
import TailwindPracticePage from "../pages/practice_tailwind/tailwind_practice";
const RoutingConfig = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={<TailwindPracticePage />}
        ></Route>
      </Routes>
    </React.Fragment>
  );
};

export default RoutingConfig;
