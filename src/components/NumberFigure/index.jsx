import PropTypes from 'prop-types';
import { textColor } from 'src/shared/colors';

import {
  figure,
  number as numberStyle,
  caption as captionStyle,
} from './style.module.css';

const NumberFigure = ({
  caption,
  number,
  color = 'red',
}) => (
  <figure className={figure}>
    <div className={`${numberStyle} ${textColor(color)}`}>{number}</div>
    <figcaption className={captionStyle}>{caption}</figcaption>
  </figure>
);

export default NumberFigure;

NumberFigure.propTypes = {
  caption: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  color: PropTypes.string,
};
