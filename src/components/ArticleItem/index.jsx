/* eslint-disable no-bitwise */
import PropTypes from 'prop-types';
// import Image from 'next/image';
import { backgroundImage } from 'src/shared/backgroundImage';

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
}) => (
  <article className={article} key={`articles${title}`}>
    <div
      className={articleImage}
      style={{ backgroundImage: backgroundImage(title, image, defaultImage) }}
    >
      {/*
        {image
          && <Image
          src={`${process.env.ASSET_PREFIX}${image}`}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
        />}
      */}
    </div>
    <div className={articleMessage}>
      <h3 className={articleTitle}><a className={articleLink} href={url}>{title}</a></h3>
      <p className={articleDate}>{date}</p>
      {author && <p className={articleAuthor}>by {author}</p>}
      {description && <p className={articleDescription}>{description}</p>}
    </div>
  </article>
);

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
