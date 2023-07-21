import React from "react";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
