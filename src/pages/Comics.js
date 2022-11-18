import { useEffect, useState } from "react";

import axios from "axios";

const Comics = ({ title, pagination }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3200/comics?title=${title}`
        ); // j'interroge la route characters en local sur leport 3200

        //console.log("response.data ==> ", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [title]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <div>{pagination}</div>
      <div className="comics-container">
        {/*un container en flex wrap*/}
        {data.results.map((comic) => {
          const urlPicture = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
          return (
            <div key={comic._id} className="comics-container-div">
              <h3>{comic.title}</h3>
              <img
                key={comic._id}
                src={urlPicture}
                alt="describe"
                className="comics-container-img" // des images avec une taille pour le flex-wrap
              />
              {comic.description ? (
                <div className="description-hidden">
                  <p>{comic.description}</p>
                  <span>...</span>
                </div>
              ) : (
                <p></p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Comics;
