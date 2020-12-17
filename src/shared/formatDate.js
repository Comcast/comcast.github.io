import { monthLongName } from 'src/shared/monthLongName';

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${monthLongName[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export default formatDate;
