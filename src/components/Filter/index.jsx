/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import Pagination from 'src/components/Pagination';

import {
  filter,
} from './style.module.css';

const Filter = ({
  data,
  itemType,
  categoryTitle,
  categoryList,
  currentPage,
  onPageSelect,
  onSelect,
  onSearch,
}) => (
  <section className={filter}>
    <div>
      <label htmlFor="projectSearch">Search {itemType[1].charAt(0).toUpperCase() + itemType[1].slice(1)}</label>
      <input id="projectSearch" type="text" placeholder="search term" onChange={(e) => onSearch(e)} />
    </div>
    <div>
      <label htmlFor="categorySelect">Select Category</label>
      <select id="categorySelect" onChange={(e) => onSelect(e)}>
        <option value="">All {categoryTitle}</option>
        {categoryList.map((lang) => <option value={lang.toLowerCase()}>{lang}</option>)}
      </select>
    </div>
    <Pagination
      itemType={itemType}
      count={data.length}
      currentPage={currentPage}
      onPageSelect={onPageSelect}
    />
  </section>
);

export default Filter;

Filter.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  categoryTitle: PropTypes.string.isRequired,
  categoryList: PropTypes.arrayOf.isRequired,
  itemType: PropTypes.arrayOf.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageSelect: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
