import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
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
    <div>
      <span onClick={prevPage}>Page précédente</span>
      {pageNumbers.map((pgNumber, index) => (
        <span
          key={index}
          active={currentPage === pgNumber}
          disabled={isNaN(pgNumber)}
          onClick={() => setCurrentPage(pgNumber)}
        >
          {pgNumber}
        </span>
      ))}
      <span onClick={nextPage}>Page suivante</span>
    </div>
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
