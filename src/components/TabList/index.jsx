/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { updateUrl } from 'src/shared/updateUrl';
import {
  tab,
  tabButtons,
  tabButton,
  platform,
  tabPanel,
  selected,
  card,
  cardCategory,
  cardTitle,
  logoMark,
  cardDescription,
  cta,
} from './style.module.css';

const UP = 38;
const DOWN = 40;

const changeTab = (event) => {
  const isDirectionPressed = (event.keyCode === UP || event.keyCode === DOWN);
  if (!isDirectionPressed) {
    return;
  }
  if (event.keyCode === UP) {
    event.target.previousElementSibling?.focus();
  }
  if (event.keyCode === DOWN) {
    event.target.nextElementSibling?.focus();
  }
  event.preventDefault();
};

const TabList = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(items[0].image);

  const tabs = items.map((item) => (
    <button
      aria-controls={`panel${item.image}`}
      aria-selected={item.image === currentItem}
      className={`${tabButton} ${item.image === currentItem ? selected : ''}`}
      id={`tab${item.image}`}
      key={`tab${item.image}`}
      onClick={() => setCurrentItem(item.image)}
      onKeyDown={changeTab}
      role="tab"
      tabIndex={item.image === currentItem ? 0 : -1}
      type="button"
    >
      <img src={`${process.env.ASSET_PREFIX}${item.image}`} height="45" width="45" alt="" /> {item.title}
    </button>
  ));

  const panels = items.map((item) => (
    <article className={`${tabPanel} ${item.image === currentItem ? selected : ''}`} tabIndex="0" role="tabpanel" id={`panel${item.image}`} key={`panel${item.image}`} aria-labelledby={`tab${item.image}`}>
      <div className={card}>
        <header>
          <p className={cardCategory}>{item.category}</p>
          <h3 className={cardTitle}>{item.title}</h3>
          <img className={logoMark} src={`${process.env.ASSET_PREFIX}${item.image}`} height="120" width="120" alt={item.title} />
        </header>
        <p className={cardDescription}>{item.description}</p>
        {item.cta && <p className="cardCta">{item.cta.lead}<Link href={updateUrl(item.cta.url)}><a href={updateUrl(item.cta.url)} className={cta}>{item.cta.label}</a></Link></p>}
      </div>
    </article>
  ));

  return (
    <article className={tab} role="tablist" aria-label="Features">
      <section className={tabButtons}>
        {tabs}
      </section>
      <section className={platform}>
        {panels}
      </section>
    </article>
  );
};

export default TabList;

TabList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};
