import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3200/characters"); // j'interroge la route characters en local sur leport 3200

      //console.log("response.data ==> ", response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="characters-container">
      {/*un container en flex wrap*/}
      {data.results.map((character) => {
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
  );
};

export default Characters;
