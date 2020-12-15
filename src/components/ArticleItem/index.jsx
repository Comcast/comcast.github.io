/* eslint-disable no-bitwise */
import PropTypes from 'prop-types';

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

  const intToRGB = (i) => {
    const c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    return '00000'.substring(0, 6 - c.length) + c;
  };

  const backgroundImage = image !== ''
    ? `url(${process.env.ASSET_PREFIX}${image})`
    : `linear-gradient(0deg, #${intToRGB(hashCode(title))}ee 0%, #${intToRGB(hashCode(title))}aa 100%), url("${process.env.ASSET_PREFIX}${defaultImage || '/images/blog/featured.jpg'}")`;

  return (
    <article className={article} key={`articles${title}`}>
      <div className={articleImage} style={{ backgroundImage }} />
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
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  defaultImage: PropTypes.string.isRequired,
};
