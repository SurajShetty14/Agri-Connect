import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import MarketPlace from "./pages/MarketPlace";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/marketplace' component={<MarketPlace />} />
      <Route path='/login' component={<Login />} />
    </Routes>
  );
};

export default App;
