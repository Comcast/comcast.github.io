import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  featureSection,
  featureIntro,
  featureTitle,
  featureImage,
  featureItems,
  more,
} from './style.module.css';

const Header = ({
  title,
  description,
  image,
  alt,
  link,
  url,
  children,
}) => (
  <section className={featureSection}>
    <div className={featureIntro}>
      {title && <h3 className={featureTitle}>{title}</h3>}
      {image && <img className={featureImage} src={image} alt={alt} />}
      {description && <p>{description}</p>}
    </div>
    <div className={featureItems}>
      {children}
    </div>
    <div>{link && (
      <p>
        <Link href={url}><a className={more} href={url} aria-label={link} title={link}>⋮</a></Link>
      </p>
    )}
    </div>
  </section>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.arrayOf.isRequired,
};
