import PropTypes from 'prop-types';

import {
  header,
  content,
  title as titleStyle,
  image,
} from './style.module.css';

const Jumbotron = ({ title }) => (
  <>
    <header className={header}>
      <section className={content}>
        <h1 className={titleStyle}>
          {title}
          <p>[Jumbotron]</p>
        </h1>
      </section>
      <section className={image}>
        <img src="img/brand_photos/comcast003.jpg" alt="" />
      </section>
    </header>
  </>
);

export default Jumbotron;

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
};
