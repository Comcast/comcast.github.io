module.exports = function formatDate(date) {
  const d = new Date(date);
  const month = (`0${(date.getMonth() + 1)}`).slice(-2);
  const day = (`0${(date.getDate() + 1)}`).slice(-2);
  const year = d.getFullYear();

  return [year, month, day].join('-');
};
