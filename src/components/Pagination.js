import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  // const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const pageNumbers = [];

  for (let i = 1; i <= nPages; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 0) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a href="#" className="page-link" onClick={prevPage}>
            Page précédente
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""} `}
          >
            <a
              href="#"
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a href="#" className="page-link" onClick={nextPage}>
            Page suivante
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

// const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
//   const pageNumbers = [];
//   const nbPages = Math.ceil(totalCharacters / charactersPerPage);

//   for (let i = 1; i <= nbPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination">
//         {pageNumbers.map((number) => {
//           return (
//             <li key={number} className="page-item">
//               <a
//                 onClick={() => paginate(number)}
//                 href="#"
//                 className="page-link"
//               >
//                 {number}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
