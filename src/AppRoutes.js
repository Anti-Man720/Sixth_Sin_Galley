import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/Cart/CartPage";
import Homepage from "./pages/Home/Homepage";
import FoodPage from "./pages/FoodPage/FoodPage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search/:searchTerm" element={<Homepage />} />
      <Route path="/tag/:tag" element={<Homepage />} />
      <Route path="/food/:id" element={<FoodPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
