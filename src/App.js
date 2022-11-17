import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Blank from "./components/Blank";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import ComicsByCharacter from "./pages/ComicsByCharacter";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Characters />}></Route>
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
