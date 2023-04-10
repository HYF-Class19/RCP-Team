import './Paginate.css';

export const Paginate = ({
  postsPerPage,
  totalPosts,
  paginate,
  nextPage,
  previousPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li onClick={previousPage} className="page-number">
          Prev
        </li>
        {/* {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={
              'page-number ' + (number === currentPage ? 'active' : '')
            }
          >
            {number}
          </li>
        ))} */}
        <li onClick={nextPage} className="page-number">
          Next
        </li>
      </ul>
    </div>
  );
};
