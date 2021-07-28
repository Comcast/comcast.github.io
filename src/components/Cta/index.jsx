import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from 'src/components/Icon';
import { updateUrl } from 'src/shared/updateUrl';

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
    <span className={icon}><Icon type={type} color={color} /></span>
    <Link href={`${updateUrl(url)}`}><a className={link} href={updateUrl(url)}>{label}</a></Link>
  </p>
);

export default Cta;

Cta.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
