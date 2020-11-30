import PropTypes from 'prop-types';

import {
  loader,
  loaded as loadedStyle,
} from './style.module.css';

const Loader = ({ title = '', loaded }) => (
  <div className={`${loader} ${loaded && loadedStyle}`}>
    {title}
  </div>
);

export default Loader;

Loader.propTypes = {
  title: PropTypes.string.isRequired,
  loaded: PropTypes.bool,
};
