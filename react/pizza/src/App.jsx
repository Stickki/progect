import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Card from "./pages/Card";

export const SearchContext = React.createContext();

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
