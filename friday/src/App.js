import React from "react";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
