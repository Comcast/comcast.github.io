import {
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
} from './styles/colors.module.css';

export const textColor = (color) => {
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
  return newColor;
};

export default textColor;
