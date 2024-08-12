import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CarPage from "../controlpage/CarPage";

import RegisterPage from "../register/RegisterPage";




function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        {/* <Route path="/" exact element={<LoginPage />} /> */}
        <Route path="/" exact element={<RegisterPage />} />
        <Route path="/carpage" element={<CarPage />} />
      </Routes>
    </Container>
  );
}

export default App;
