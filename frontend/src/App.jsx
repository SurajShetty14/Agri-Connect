import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import ProductForm from "./Components/ProductForm";
import FarmerDashboard from "./pages/FarmerDashboard";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import MarketPlace from "./pages/MarketPlace";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/marketplace' element={<MarketPlace />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/farmerDashboard' element={<FarmerDashboard />} />
      <Route path='/products/add' element={<ProductForm />} />
      <Route path='/products/:id' element={<ProductDetails />} />
      <Route path='/products/edit/:id' element={<ProductForm isEdit />} />
    </Routes>
  );
};

export default App;
