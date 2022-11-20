import { Link } from "react-router-dom";

import Pagination from "../components/Pagination";

const Characters = ({
  items,
  loading,
  nbPages,
  currentPage,
  setCurrentPage,
}) => {
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

      <div className="characters-container">
        {/*un container en flex wrap*/}
        {items[1].map((item) => {
          //console.log("character=>", character);
          const urlPicture = `${item.thumbnail.path}.${item.thumbnail.extension}`;
          return (
            <Link to={`/comics/${item._id}`}>
              <div key={item._id} className="characters-container-div">
                <h3>{item.name}</h3>
                <img
                  key={item._id}
                  src={urlPicture}
                  alt="describe"
                  className="characters-container-img" // des images avec une taille pour le flex-wrap
                />
                {item.description ? (
                  <div className="description-hidden">
                    <p>{item.description}</p>
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
