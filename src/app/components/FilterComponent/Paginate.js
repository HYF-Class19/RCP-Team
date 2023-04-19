import './Paginate.css';

export const Paginate = ({
  postsPerPage,
  totalPosts,
  nextPage,
  previousPage,
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
        <li onClick={nextPage} className="page-number">
          Next
        </li>
      </ul>
    </div>
  );
};
