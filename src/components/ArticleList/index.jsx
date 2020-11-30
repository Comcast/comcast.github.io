/* eslint-disable no-bitwise */
import PropTypes from 'prop-types';

import {
  articleList,
  article,
  articleTitle,
  articleMessage,
  articleAuthor,
  articleLink,
  articleImage,
  articleDate,
} from './style.module.css';

const ArticleList = ({ content }) => {
  const articles = content.map(({
    title,
    author,
    description,
    date,
    image,
    url,
  }) => {
    const hashCode = (s) => s.split('').reduce((a, b) => { const newA = ((a << 5) - a) + b.charCodeAt(0); return newA & newA; }, 0);

    const intToRGB = (i) => (i & 0x00FFFFFF).toString(16); // "00000".substring(0, 6 - c.length) + c

    const backgroundImage = image ? `url(${process.env.ASSET_PREFIX}${image})` : `linear-gradient(0deg, #${intToRGB(hashCode(title))}ee 0%, #${intToRGB(hashCode(title))}aa 100%), url("${process.env.ASSET_PREFIX}/images/blog/_default-blog001.jpg")`;

    return (
      <article className={article} key={`articles${title}`}>
        <div className={articleImage} style={{ backgroundImage }} />
        <div className={articleMessage}>
          <h3 className={articleTitle}><a className={articleLink} href={url}>{title}</a></h3>
          <p className={articleDate}>{date}</p>
          {author && <p className={articleAuthor}>by {author}</p>}
          {description && <p className={articleAuthor}>{description}</p>}
        </div>
      </article>
    );
  });

  return (
    <section className={articleList}>
      {articles}
    </section>
  );
};

export default ArticleList;

ArticleList.propTypes = {
  content: PropTypes.arrayOf.isRequired,
};
