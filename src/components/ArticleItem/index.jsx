/* eslint-disable no-bitwise */
import PropTypes from 'prop-types';
import Image from 'next/image';

import {
  article,
  articleTitle,
  articleMessage,
  articleAuthor,
  articleDescription,
  articleLink,
  articleImage,
  articleDate,
} from './style.module.css';

const ArticleItem = ({
  title,
  author,
  description,
  date,
  image,
  url,
  defaultImage,
}) => {
  const hashCode = (s) => s.split('').reduce((a, b) => { const newA = ((a << 5) - a) + b.charCodeAt(0); return newA & newA; }, 0);

  //TODO move to shared functions
  const intToRGB = (i) => {
    const c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    return '00000'.substring(0, 6 - c.length) + c;
  };

  const backgroundImage = !image && `linear-gradient(0deg, #${intToRGB(hashCode(title))}ee 0%, #${intToRGB(hashCode(title))}aa 100%), url("${process.env.ASSET_PREFIX}${defaultImage || '/images/blog/featured.jpg'}")`;

  return (
    <article className={article} key={`articles${title}`}>
      <div className={articleImage} style={{ backgroundImage }}>
        {image && <img src={`${process.env.ASSET_PREFIX}${image}`} alt="" layout="fill" objectfit="cover" objectposition="center" loading="lazy" />}
      </div>
      <div className={articleMessage}>
        <h3 className={articleTitle}><a className={articleLink} href={url}>{title}</a></h3>
        <p className={articleDate}>{date}</p>
        {author && <p className={articleAuthor}>by {author}</p>}
        {description && <p className={articleDescription}>{description}</p>}
      </div>
    </article>
  );
};

export default ArticleItem;

ArticleItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  defaultImage: PropTypes.string,
};
