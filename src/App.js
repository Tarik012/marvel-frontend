import "./App.css";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Blank from "./components/Blank";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import ComicsByCharacter from "./pages/ComicsByCharacter";

function App() {
  const [title, setTitle] = useState("");
  console.log("title==>", title);
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header title={title} setTitle={setTitle} />
        </header>
        <Routes>
          <Route path="/" element={<Characters title={title} />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
          <Route
            path="/comics/:characterId"
            element={<ComicsByCharacter />}
          ></Route>
          <Route path="/favoris" element={<Favoris />}></Route>
          <Route path="*" element={<Blank />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
