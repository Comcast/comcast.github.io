import PropTypes from 'prop-types';
import Icon from '../Icon';

import {
  articleList,
  article,
  articleTitle,
  articleLink,
  articleImage,
  articleDate,
} from './style.module.css';

const ArticleList = ({ content }) => {
  const articles = content.map(({
    title,
    date,
    image,
    url,
  }) => (
    <article className={article} key={`articles${date}`}>
      <a className={articleLink} href={url}>
        <div className={articleImage}>{image ? 'image' : <Icon type="messages" color="blue" />}</div>
        <h3 className={articleTitle}>{title}</h3>
        <p className={articleDate}>{date}</p>
      </a>
    </article>
  ));

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
