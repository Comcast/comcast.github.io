import { monthLongName } from 'src/shared/monthLongName';

export const dateSpan = (first, last) => {
  const firstDate = first.getDate();
  const lastDate = last.getDate();
  const firstMonth = first.getMonth();
  const lastMonth = last.getMonth();
  const firstYear = first.getFullYear();
  const lastYear = last.getFullYear();

  if (firstYear !== lastYear) {
    return `${monthLongName[firstMonth]} ${firstDate}, ${firstYear}-${monthLongName[lastMonth]} ${lastDate}, ${lastYear}`;
  }
  if (firstMonth !== lastMonth) {
    return `${monthLongName[firstMonth]} ${firstDate}-${monthLongName[lastMonth]} ${lastDate}, ${firstYear}`;
  }
  if (firstDate !== lastDate) {
    return `${monthLongName[firstMonth]} ${firstDate}-${lastDate}, ${firstYear}`;
  }
  return `${monthLongName[firstMonth]} ${firstDate}, ${firstYear}`;
};

export default dateSpan;
