import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { NewsBoard } from "./Components/NewsBoard";
import { SearchBar } from "./Components/SearchBar";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";

function App() {
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Affiche les catégories seulement sur la page d'accueil
  const showCategories = location.pathname === "/";

  return (
    <div>
      <Navbar setCategory={setCategory} showCategories={showCategories} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
              <NewsBoard category={category} searchQuery={searchQuery} />
            </>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
