import PropTypes from 'prop-types';
import { backgroundImage } from 'src/shared/backgroundImage';

import {
  profile,
  title,
  image,
  description,
  socialLinks,
} from './style.module.css';

const Profile = ({ person, defaultImage }) => (
  <article className={profile}>
    <div className={image} style={{ backgroundImage: backgroundImage(person.name, person.image, defaultImage) }}>
    </div>
    <h4 className={title}>{person.name}</h4>
    <p className={description}>{person.title}</p>
    <div className={socialLinks}>
      {person.connect?.map((social) => <a href={social.link} title={`${social.name}: ${person.name}`} key={`${person.name}_${social.name}`}><span className="vh">{person.name} at {social.name}</span></a>)}
    </div>
  </article>
);

export default Profile;

Profile.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    bio: PropTypes.string,
    connect: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
  }).isRequired,
  defaultImage: PropTypes.string,
};
