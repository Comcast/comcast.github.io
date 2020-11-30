import PropTypes from 'prop-types';

import {
  figure,
  number as numberStyle,
  caption as captionStyle,
  yellowColor,
  orangeColor,
  redColor,
  purpleColor,
  blueColor,
  greenColor,
  blackColor,
  mineshaftColor,
  carbonColor,
  mercuryColor,
  whiteColor,
} from './style.module.css';

const NumberFigure = ({
  caption,
  number,
  color = 'red',
}) => {
  let newColor = blackColor;
  switch (color) {
    case 'yellow':
      newColor = yellowColor;
      break;
    case 'orange':
      newColor = orangeColor;
      break;
    case 'red':
      newColor = redColor;
      break;
    case 'purple':
      newColor = purpleColor;
      break;
    case 'blue':
      newColor = blueColor;
      break;
    case 'green':
      newColor = greenColor;
      break;
    case 'black':
      newColor = blackColor;
      break;
    case 'mineshaft':
      newColor = mineshaftColor;
      break;
    case 'carbon':
      newColor = carbonColor;
      break;
    case 'mercury':
      newColor = mercuryColor;
      break;
    case 'white':
      newColor = whiteColor;
      break;
    default:
      newColor = blackColor;
  }

  return (
    <figure className={figure}>
      <div className={`${numberStyle} ${newColor}`}>{number}</div>
      <figcaption className={captionStyle}>{caption}</figcaption>
    </figure>
  );
};

export default NumberFigure;

NumberFigure.propTypes = {
  caption: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  color: PropTypes.string,
};
