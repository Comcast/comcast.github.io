import PropTypes from 'prop-types';

import {
  profile,
  title,
  image,
  description,
  socialLinks,
} from './style.module.css';

const Profile = ({ person, defaultImage }) => {
  const hashCode = (s) => s.split('').reduce((a, b) => { const newA = ((a << 5) - a) + b.charCodeAt(0); return newA & newA; }, 0);

  const intToRGB = (i) => {
    const c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    return '00000'.substring(0, 6 - c.length) + c;
  };

  const backgroundImage = person.image !== ''
    ? `url(${process.env.ASSET_PREFIX}${person.image})`
    : `linear-gradient(0deg, #${intToRGB(hashCode(person.name))}ee 0%, #${intToRGB(hashCode(person.name))}aa 100%), url("${process.env.ASSET_PREFIX}${defaultImage}")`;

  return (
    <article className={profile}>
      <div className={image} style={{ backgroundImage }} />
      <h4 className={title}>{person.name}</h4>
      <p className={description}>{person.title}</p>
      <div className={socialLinks}>
        {person.connect?.map((social) => <a href={social.link} title={`${social.name}: ${person.name}`}><span className="vh">{person.name} at {social.name}</span></a>)}
      </div>
    </article>
  )
};

export default Profile;

Profile.propTypes = {
  person: PropTypes.arrayOf.isRequired,
  defaultImage: PropTypes.string,
};
