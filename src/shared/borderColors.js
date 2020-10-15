import {
  yellowBorder,
  orangeBorder,
  redBorder,
  purpleBorder,
  blueBorder,
  greenBorder,
  blackBorder,
  mineshaftBorder,
  carbonBorder,
  mercuryBorder,
  whiteBorder,
} from './styles/colors.module.css';

export const borderColor = (color) => {
  let newBorder = blackBorder;
  switch (color) {
    case 'yellow':
      newBorder = yellowBorder;
      break;
    case 'orange':
      newBorder = orangeBorder;
      break;
    case 'red':
      newBorder = redBorder;
      break;
    case 'purple':
      newBorder = purpleBorder;
      break;
    case 'blue':
      newBorder = blueBorder;
      break;
    case 'green':
      newBorder = greenBorder;
      break;
    case 'black':
      newBorder = blackBorder;
      break;
    case 'mineshaft':
      newBorder = mineshaftBorder;
      break;
    case 'carbon':
      newBorder = carbonBorder;
      break;
    case 'mercury':
      newBorder = mercuryBorder;
      break;
    case 'white':
      newBorder = whiteBorder;
      break;
    default:
      newBorder = blackBorder;
  }
  return newBorder;
};

export default borderColor;
