/* eslint-disable no-bitwise */
const hashCode = (s) => s.split('').reduce((a, b) => { const newA = ((a << 5) - a) + b.charCodeAt(0); return newA & newA; }, 0);

const intToRGB = (i) => {
  const c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return '00000'.substring(0, 6 - c.length) + c;
};

export const backgroundImage = (title, image, defaultImage) => (!image
  ? `linear-gradient(0deg, #${intToRGB(hashCode(title))}ee 0%, #${intToRGB(hashCode(title))}aa 100%), url("${process.env.ASSET_PREFIX}${defaultImage || '/images/blog/featured.jpg'}")`
  : `url("${process.env.ASSET_PREFIX}${image}")`
);

export default backgroundImage;
