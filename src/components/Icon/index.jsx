import { textColor } from 'src/shared/colors';
import {
  icon,
} from './style.module.css';
import Atom from './Atom';
import Avatar from './Avatar';
import BarGraph from './BarGraph';
import Calendar from './Calendar';
import Chip from './Chip';
import House from './House';
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
    case 'chip':
      iconComponent = <Chip />;
      break;
    case 'house':
      iconComponent = <House />;
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

  return (
    <>
      <span className={`${icon} ${textColor(color)}`}>
        {iconComponent}
      </span>
    </>
  );
};

export default Icon;
