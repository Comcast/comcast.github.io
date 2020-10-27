import {
  icon,
  yellowColor,
  orangeColor,
  redColor,
  purpleColor,
  blueColor,
  greenColor,
  blackColor,
} from './style.module.css';
import Atom from '../../../public/brand_icons/Atom';
import Avatar from '../../../public/brand_icons/Avatar';
import BarGraph from '../../../public/brand_icons/BarGraph';
import Calendar from '../../../public/brand_icons/Calendar';
import Messages from '../../../public/brand_icons/Messages';
import People from '../../../public/brand_icons/People';

const Icon = ({ type = 'question', color = 'blue' }) => {
  let iconComponent = <Atom />;
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
    case 'people':
      iconComponent = <People />;
      break;
    case 'messages':
      iconComponent = <Messages />;
      break;
    default:
      iconComponent = <Avatar />;
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
    default:
      newColor = blackColor;
  }

  return (
    <>
      <div className={`${icon} ${newColor}`}>
        {iconComponent}
      </div>
    </>
  );
};

export default Icon;
