import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../Icon';

import {
  cta,
  icon,
  link,
} from './style.module.css';

const Cta = ({
  type,
  color,
  label,
  url,
}) => (
  <p className={cta}>
    <div className={icon}><Icon type={type} color={color} /></div>
    <Link href={`${process.env.ASSET_PREFIX}${url}`}><a className={link} href={`${process.env.ASSET_PREFIX}${url}`}>{label}</a></Link>
  </p>
);

export default Cta;

Cta.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
