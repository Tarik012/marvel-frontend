// import { useEffect, useState } from "react";

// import axios from "axios";

import { Link } from "react-router-dom";

import Pagination from "../components/Pagination";

const Characters = ({
  characters,
  loading,
  charactersPerPage,
  totalCharacters,
  paginate,
  nbPages,
  currentPage,
  setCurrentPage,
}) => {
  //console.log("characters=>", characters);
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log("limit, skip, title==>", limit, skip, title);
  //       const response = await axios.get(
  //         `http://localhost:3200/characters?limit=${limit}&skip=${skip}&title=${title}`
  //       ); // j'interroge la route characters en local sur leport 3200

  //       //console.log("response.data ==> ", response.data);
  //       setData(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchData();
  // }, [title, limit, skip]);

  // const indexOfLastRecord = skip * limit;
  // const indexOfFirstRecord = indexOfLastRecord - limit;

  // const result = [];

  // for (var i in data) result.push([i, data[i]]);

  // const currentRecords = result.slice(indexOfFirstRecord, indexOfLastRecord);
  // console.log("currentRecords=>", currentRecords);

  // const nPages = Math.ceil(data.count / limit);

  return loading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <div>
        <Pagination
          nPages={nbPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {/* <div>
        <Pagination
          charactersPerPage={charactersPerPage}
          totalCharacters={totalCharacters}
          paginate={paginate}
        />
      </div> */}

      <div className="characters-container">
        {/*un container en flex wrap*/}
        {characters[1].map((character) => {
          //console.log("character=>", character);
          const urlPicture = `${character.thumbnail.path}.${character.thumbnail.extension}`;
          return (
            <Link to={`/comics/${character._id}`}>
              <div key={character._id} className="characters-container-div">
                <h3>{character.name}</h3>
                <img
                  key={character._id}
                  src={urlPicture}
                  alt="describe"
                  className="characters-container-img" // des images avec une taille pour le flex-wrap
                />
                {character.description ? (
                  <div className="description-hidden">
                    <p>{character.description}</p>
                    <span>...</span>
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
