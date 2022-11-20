import "./App.css";

import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";

import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blank from "./components/Blank";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import ComicsByCharacter from "./pages/ComicsByCharacter";

function App() {
  const [title, setTitle] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);

  // const [currentPage, setCurrentPage] = useState(0);
  // const [recordsPerPage] = useState(100);

  const [characters, setCharacters] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [charactersPerPage] = useState(50);

  const indexOfLastCharacter =
    currentPage === 0 ? charactersPerPage : currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;

  const result = [];

  for (var i in characters) result.push([i, characters[i]]);

  const currentCharacters = result.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  //console.log("characters=>", characters);

  //console.log("currentCharacters[2]==>", currentCharacters[2]);

  //console.log("currentCharacters=>", currentCharacters);

  const nbPages = Math.ceil(characters.count / charactersPerPage);

  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // console.log(
        //   "charactersPerPage, currentPage, title==>",
        //   charactersPerPage,
        //   currentPage,
        //   title
        // );
        const res = await axios.get(
          `http://localhost:3200/characters?limit=${charactersPerPage}&skip=${currentPage}&title=${title}`
        );

        //console.log("res.data ==> ", res.data);
        setCharacters(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.res.data);
      }
    };
    fetchCharacters();
  }, [title, charactersPerPage, currentPage]);

  // console.log("title==>", title);
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
                characters={currentCharacters[2]}
                loading={loading}
                charactersPerPage={charactersPerPage}
                totalCharacters={characters.count}
                // paginate={paginate}
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
                title={title}
                pagination={<Pagination />}
                skip={skip}
                limit={limit}
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
