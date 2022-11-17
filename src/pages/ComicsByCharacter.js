import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //permets de récupérer characterId venant du Link de Characters

const ComicsByCharacter = () => {
  const { characterId } = useParams(); // je déstructure la clé
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //console.log("characterId==>", characterId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3200/comics/${characterId}`
        ); // j'interroge la route comics en local sur le port 3200 lpour les comics en fonction de l'id du character

        //console.log("response.data ==> ", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div>
      <p>{data.name}</p>
      <img
        className="characters-container-img"
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt="description"
      ></img>
      <div>
        <div className="carrousel-comics">
          {data.comics.map((comicOfCharacter) => {
            return (
              <div>
                <h3>{comicOfCharacter.title}</h3>
                <img
                  className="characters-container-img"
                  src={`${comicOfCharacter.thumbnail.path}.${comicOfCharacter.thumbnail.extension}`}
                  alt="description"
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComicsByCharacter;
