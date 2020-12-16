import PropTypes from 'prop-types';
import ArticleItem from 'src/components/ArticleItem';

import {
  articleList,
} from './style.module.css';

const ArticleList = ({ content, defaultImage }) => (
  <section className={articleList}>
    {content.map(({
      title,
      author,
      description,
      date,
      image,
      url,
    }) => (
      <ArticleItem
        title={title}
        author={author}
        description={description}
        date={date}
        image={image}
        url={url}
        defaultImage={defaultImage}
        key={url}
      />
    ))}
  </section>
);

export default ArticleList;

ArticleList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
  defaultImage: PropTypes.string,
};
