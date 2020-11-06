import {
  icon,
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
import Atom from './Atom';
import Avatar from './Avatar';
import BarGraph from './BarGraph';
import Calendar from './Calendar';
import Messages from './Messages';
import People from './People';
import Question from './Question';

const Icon = ({ type = 'question', color = 'blue' }) => {
  let iconComponent = <Question />;
  switch (type) {
    case 'atom':
      iconComponent = <Atom />;
      break;
    case 'avatar':
      iconComponent = <Avatar />;
      break;
    case 'bargraph':
      iconComponent = <BarGraph />;
      break;
    case 'calendar':
      iconComponent = <Calendar />;
      break;
    case 'messages':
      iconComponent = <Messages />;
      break;
    case 'people':
      iconComponent = <People />;
      break;
    case 'question':
      iconComponent = <Question />;
      break;
    default:
      iconComponent = <Question />;
  }

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
    <>
      <span className={`${icon} ${newColor}`}>
        {iconComponent}
      </span>
    </>
  );
};

export default Icon;
