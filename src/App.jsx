import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { NewsBoard } from "./Components/NewsBoard";
import { SearchBar } from "./Components/SearchBar";
import Footer from "./Components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <NewsBoard category={category} searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default App;
