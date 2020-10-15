import PropTypes from 'prop-types';

import {
  superbutton,
  square,
  text,
  title as titleStyle,
  cta,
} from './style.module.css';

const SuperButton = ({ title, image }) => {
  const backgroundImage = `url(${image})`;
  return (
    <a href="?" className={`${superbutton} ${square}`} style={{ backgroundImage }}>
      <div className={text}>
        <p className={titleStyle}>{title}</p>
        <p className={cta}>See more</p>
      </div>
    </a>
  );
};

export default SuperButton;

SuperButton.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};
