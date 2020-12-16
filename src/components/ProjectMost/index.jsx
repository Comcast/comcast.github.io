import PropTypes from 'prop-types';

import {
  project,
  content,
  number,
  title as titleStyle,
} from './style.module.css';

const ProjectMost = ({
  title,
  url,
  stars = '',
  forks = '',
}) => (
  <article className={project}>
    <figure className={content}>
      {stars && <div className={number}>{stars}<img height="32" width="32" src={`${process.env.ASSET_PREFIX}/images/star.svg`} alt="stargazers" /></div>}
      {forks && <div className={number}>{forks}<img height="32" width="32" src={`${process.env.ASSET_PREFIX}/images/fork.svg`} alt="forks" /></div>}
      <figcaption className={titleStyle}><a href={url}>{title}</a></figcaption>
    </figure>
  </article>
);

export default ProjectMost;

ProjectMost.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  stars: PropTypes.number,
  forks: PropTypes.number,
};
