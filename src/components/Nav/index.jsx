import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
// import { nav } from './style.module.css';
const KEYCODE_TAB = 9;
const ESC = 27;

const Nav = () => {
  const [open, setOpen] = useState(null);
  const navOpenRef = useRef(null);
  const navCloseRef = useRef(null);

  useEffect(() => {
    if (open === null) { return; }
    if (open) {
      navCloseRef.current.focus();
    } else {
      navOpenRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      const focusableEls = document.querySelector('.nav').querySelectorAll('.navigation__close, a[href]');
      const firstFocusableEl = focusableEls[0];
      const lastFocusableEl = focusableEls[focusableEls.length - 1];
      const listener = (event) => {
        if (event.keyCode === ESC) {
          setOpen(false);
        }
        if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {
          if (event.shiftKey) {
            if (document.activeElement === firstFocusableEl) {
              lastFocusableEl.focus();
              event.preventDefault();
            }
          } else if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            event.preventDefault();
          }
        }
      };
      document.addEventListener('keydown', listener);

      return () => {
        document.removeEventListener('keydown', listener);
      };
    }
    return '';
  });

  return (
    <nav className={`nav ${open ? 'open' : ''}`}>
      <button className="navigation__button" type="button" aria-expanded={!!open} aria-label="Expand navigation menu" onClick={() => setOpen(!open)} ref={navOpenRef} />
      <button className="navigation__close" type="button" aria-expanded={!!open} aria-label="Close navigation menu" onClick={() => setOpen(!open)} ref={navCloseRef} />
      <ul>
        <li><Link href={`${process.env.ASSET_PREFIX}/`}>About</Link></li>
        <li><Link href={`${process.env.ASSET_PREFIX}/projects`}>Projects</Link></li>
        <li><Link href={`${process.env.ASSET_PREFIX}/people`}>Talks</Link></li>
        <li><Link href={`${process.env.ASSET_PREFIX}/community`}>Community</Link></li>
        {/* <li><Link href={`${process.env.ASSET_PREFIX}/events`}>Events</Link></li>
        <li><Link href={`${process.env.ASSET_PREFIX}/blog`}>News</Link></li> */}
      </ul>
    </nav>
  );
};

export default Nav;
