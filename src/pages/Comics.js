import Pagination from "../components/Pagination";

const Comics = ({ items, loading, nbPages, currentPage, setCurrentPage }) => {
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
      <div className="comics-container">
        {/*un container en flex wrap*/}
        {items[1].map((item) => {
          const urlPicture = `${item.thumbnail.path}.${item.thumbnail.extension}`;
          return (
            <div key={item._id} className="comics-container-div">
              <h3>{item.title}</h3>
              <img
                key={item._id}
                src={urlPicture}
                alt="describe"
                className="comics-container-img" // des images avec une taille pour le flex-wrap
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
          );
        })}
      </div>
    </>
  );
};

export default Comics;
