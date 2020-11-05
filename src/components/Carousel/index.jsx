/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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

  const listItems = items.map((item, i) => (
    <figure className={carouselItem} key={`carousel${item.id}`} style={i === current ? { display: 'block' } : { display: 'none' }}>
      <p className={carouselCount}>{i + 1} / {items.length}</p>
      <div className={carouselText}>
        <h3>{item.title}</h3>
        <p>[TOO BOXY!?] {item.description}</p>
      </div>
      <figcaption className={carouselCaption}> {item.cta.lead} <a href={item.cta.url} target="_blank" rel="noopener noreferrer">{item.cta.label}</a></figcaption>
    </figure>
  ));

  return (
    <div className={carousel}>
      <button type="button" className={next} onClick={nextSlide}>&#10095;</button>
      {listItems}
      <button type="button" className={prev} onClick={prevSlide}>&#10094;</button>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  items: PropTypes.arrayOf(String),
};
