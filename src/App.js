import "./App.css";

import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";

import Header from "./components/Header";
import Blank from "./components/Blank";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import ComicsByCharacter from "./pages/ComicsByCharacter";

function App() {
  const [title, setTitle] = useState("");

  const [items, setItems] = useState([]);
  const [itemsComics, setItemsComics] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(50);

  const indexOfLastItem =
    currentPage === 0 ? itemsPerPage : currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // je mets les objets dans un tableau pour utiliser la méthode slice() afin de récupérer les items de la page
  const result = [];
  for (var i in items) result.push([i, items[i]]);
  const currentCharacters = result.slice(indexOfFirstItem, indexOfLastItem);
  const nbPages = Math.ceil(items.count / itemsPerPage);

  const resultComics = [];
  for (var j in itemsComics) resultComics.push([j, itemsComics[j]]);
  const currentComics = resultComics.slice(indexOfFirstItem, indexOfLastItem);
  const nbPagesComics = Math.ceil(itemsComics.count / itemsPerPage);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3200/characters?limit=${itemsPerPage}&skip=${currentPage}&title=${title}`
        );

        //console.log("res.data ==> ", res.data);
        setItems(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.res.data);
      }
    };
    fetchCharacters();
  }, [title, itemsPerPage, currentPage]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3200/comics?limit=${itemsPerPage}&skip=${currentPage}&title=${title}`
        );

        //console.log("res.data ==> ", res.data);
        setItemsComics(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.res.data);
      }
    };
    fetchComics();
  }, [title, itemsPerPage, currentPage]);

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header title={title} setTitle={setTitle} />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Characters
                items={currentCharacters[2]}
                loading={loading}
                nbPages={nbPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            }
          ></Route>
          <Route
            path="/comics"
            element={
              <Comics
                items={currentComics[2]}
                loading={loading}
                nbPages={nbPagesComics}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            }
          ></Route>
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
