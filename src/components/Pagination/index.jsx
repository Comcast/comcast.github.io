import PropTypes from 'prop-types';

import {
  pagination,
  page,
  repoCount,
  paginationButtons,
  pagesCount,
  selected,
} from './style.module.css';

const paginate = (currentPage, endPage, onPageSelect) => {
  let n = 0;
  const pages = [];

  while (n < endPage) {
    if (((currentPage >= 4)
    && n === 1)
    || ((n > 4 && currentPage <= endPage - 5)
    && ((n + 1) % 5 === 0))
    || ((n >= currentPage + 2) && (n <= currentPage - 2))) {
      pages.push(<span className={page} key={`span_${n}`}>&hellip;</span>);
    }
    if ((n === 0)
    || (n < 5 && currentPage < 3)
    || ((n <= currentPage + 2) && (n >= currentPage - 2))
    || ((n + 1) % 5 === 0)
    || (n > 4 && currentPage >= endPage - 4)) {
      pages.push(<button type="button" onClick={(e) => onPageSelect(e)} value={n} key={`button_${n}`} className={`${page} ${currentPage === n ? selected : null}`}>{n + 1}</button>);
    }
    n += 1;
  }
  return pages;
};

const Pagination = ({
  itemType,
  count,
  currentPage,
  onPageSelect,
}) => (
  <div className={pagination}>
    <p className={repoCount}>{count} {count === 1 ? itemType[0] : itemType[1]}</p>
    {count > 10 && (
      <p className={paginationButtons}>
        &larr;
        {paginate(parseInt(currentPage, 10), Math.ceil(count / 10), onPageSelect)}
        &rarr;
      </p>
    )}
    <p className={pagesCount}>page {parseInt(currentPage, 10) + 1} of {Math.ceil(count / 10)}</p>
  </div>
);

export default Pagination;

Pagination.propTypes = {
  itemType: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageSelect: PropTypes.func.isRequired,
};
