import PropTypes from 'prop-types';
import Link from 'next/link';
import { backgroundColor } from 'src/shared/backgroundColors';
import { updateUrl } from 'src/shared/updateUrl';

import {
  featureSection,
  featureIntro,
  featureTitle,
  featureImage,
  featureItems,
  more,
  moreMobile,
} from './style.module.css';

const FeatureSection = ({
  title,
  description,
  color,
  image,
  alt,
  link,
  url,
  children,
}) => (
  <section className={`${featureSection} ${backgroundColor(color)}`}>
    <div className={featureIntro}>
      {title && <h3 className={featureTitle}>{title}</h3>}
      {image && <img className={featureImage} src={`${process.env.ASSET_PREFIX}${image}`} alt={alt} />}
      {description && <p>{description}</p>}
    </div>
    <div className={featureItems}>
      {children}
    </div>
    <div>{link && (
      <p>
        <Link href={updateUrl(url)}>
          <a className={more} href={updateUrl(url)} aria-label={link} title={link}>⋮</a>
        </Link>
        <Link href={updateUrl(url)}>
          <a className={moreMobile} href={updateUrl(url)} aria-label={link} title={link}>{link}</a>
        </Link>
      </p>
    )}
    </div>
  </section>
);

export default FeatureSection;

FeatureSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
