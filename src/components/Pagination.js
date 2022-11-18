const Pagination = () => {
  // Mettre dans APP et passer en props dans le composant pour passer en parametres de la requetes axios avec des &limit&skip

  // if(skip>0)
  // onclick setSkip(skip-limit)
  // et inversement
  return (
    <div>
      <button>Page précédente</button>
      <button>Page suivante</button>
    </div>
  );
};

export default Pagination;
