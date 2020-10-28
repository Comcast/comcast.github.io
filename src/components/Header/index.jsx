import PropTypes from 'prop-types';

import {
  header,
  content,
  title as titleStyle,
  image as imageStyle, featuredImage,
} from './style.module.css';

const Header = ({ title, image }) => (
  <header className={`${header} ${image && featuredImage}`}>
    <section className={content}>
      <h1 className={titleStyle}>{title}</h1>
    </section>
    {image && (
    <section className={imageStyle}>
      <img src={image} alt="" />
    </section>
    )}
  </header>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};
