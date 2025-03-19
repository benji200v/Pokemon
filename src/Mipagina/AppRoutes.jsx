import React from "react";
import { Routes, Route } from "react-router-dom";
// Importar las páginas principales
import PageHome from "./Home/PageHome";
import PageAbout from "./about/PageAbout";
import PageContact from "./Contac/PageContac";
import Homeresect from "../Homerecetas/HomeResect";
import DetalleDash from "../Dash/DetallesDash";
import PageDash from "../Dash/pageDash";
import NotFuntion from "../NotFuntion"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/about" element={<PageAbout />} />
      <Route path="/contact" element={<PageContact />} />
      <Route path="/recetas" element={<Homeresect />} />


      <Route path='/dash'>
        <Route index element={<PageDash />} />
        <Route path=':city' element={<DetalleDash/>} />
      </Route>

      <Route path='*' element={<NotFuntion/>} />
    
    </Routes>
  );
}
    