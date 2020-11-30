import {
  yellowBg,
  orangeBg,
  redBg,
  purpleBg,
  blueBg,
  greenBg,
  blackBg,
  mineshaftBg,
  carbonBg,
  mercuryBg,
  whiteBg,
} from './styles/colors.module.css';

export const backgroundColor = (color) => {
  let newBg = blackBg;
  switch (color) {
    case 'yellow':
      newBg = yellowBg;
      break;
    case 'orange':
      newBg = orangeBg;
      break;
    case 'red':
      newBg = redBg;
      break;
    case 'purple':
      newBg = purpleBg;
      break;
    case 'blue':
      newBg = blueBg;
      break;
    case 'green':
      newBg = greenBg;
      break;
    case 'black':
      newBg = blackBg;
      break;
    case 'mineshaft':
      newBg = mineshaftBg;
      break;
    case 'carbon':
      newBg = carbonBg;
      break;
    case 'mercury':
      newBg = mercuryBg;
      break;
    case 'white':
      newBg = whiteBg;
      break;
    default:
      newBg = blackBg;
  }
  return newBg;
};

export default backgroundColor;
