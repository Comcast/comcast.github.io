import PropTypes from 'prop-types';
import { textColor } from 'src/shared/colors';
import {
  project,
  numbers,
  number,
  title as titleStyle,
  description as descriptionStyle,
  date,
} from './style.module.css';

const ProjectCard = ({
  color = 'blue',
  title,
  description,
  url,
  stars,
  forks = '',
  created,
  updated,
}) => (
  <article className={project}>
    <h4 className={titleStyle}><a href={url} className={textColor(color)}>{title}</a></h4>
    <p className={descriptionStyle}>{description || 'An Open Source project from Comcast.'}</p>
    <div>
      <div className={`${numbers} ${textColor(color)}`}>
        {stars >= 0 && <div className={number}>{stars}<img height="24" width="24" src={`${process.env.ASSET_PREFIX}/images/star.svg`} alt="stargazers" /></div>}
        {forks >= 0 && <div className={number}>{forks}<img height="24" width="24" src={`${process.env.ASSET_PREFIX}/images/fork.svg`} alt="forks" /></div>}
      </div>
      {created && <p className={date}>created on: {created}</p>}
      {updated && <p className={date}>updated on: {updated}</p>}
    </div>
  </article>
);

export default ProjectCard;

ProjectCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  forks: PropTypes.number,
  stars: PropTypes.number,
  created: PropTypes.string,
  updated: PropTypes.string,
};
