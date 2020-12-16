import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  carousel,
  carouselItem,
  carouselCount,
  carouselText,
  carouselCaption,
  prev,
  next,
} from './style.module.css';

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const updateUrl = (path) => (path.includes('http') ? path : `${process.env.ASSET_PREFIX}${path}`);

  const showSlide = (n) => {
    if (items.length < 1) { return; }
    if (n > items.length) { setCurrent(0); }
  };
  const nextSlide = () => {
    if (current >= items.length - 1) { setCurrent(0); } else {
      setCurrent(current + 1);
    }
    showSlide(current);
  };
  const prevSlide = () => {
    if (current <= 0) { setCurrent(items.length - 1); } else {
      setCurrent(current - 1);
    }
    showSlide(current);
  };

  const listItems = items.map((item, i) => {
    const backgroundImage = `url(${process.env.ASSET_PREFIX}${item.image})`;
    const display = (i === current ? 'block' : 'none');

    return (
      <figure className={carouselItem} key={`carousel_${item.name}`} style={{ display, backgroundImage }}>
        <p className={carouselCount}>{i + 1} / {items.length}</p>
        <div className={carouselText}>
          <h3>{item.title}</h3>
          <p>[TOO BOXY!?] {item.description}</p>
        </div>
        <figcaption className={carouselCaption}> {item.cta.lead} <a href={updateUrl(item.cta.url)} target="_blank" rel="noopener noreferrer">{item.cta.label}</a></figcaption>
      </figure>
    );
  });

  return (
    <article className={carousel}>
      <button type="button" className={next} onClick={nextSlide}>&#10095;</button>
      {listItems}
      <button type="button" className={prev} onClick={prevSlide}>&#10094;</button>
    </article>
  );
};

export default Carousel;

Carousel.propTypes = {
  items: PropTypes.arrayOf(String),
};
