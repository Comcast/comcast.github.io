import { useState, useEffect, useRef } from "react";
import Link from "next/link";
const KEYCODE_TAB = 9;
const ESC = 27;

const Nav = () => {
  const [open, setOpen] = useState(null);
  const navOpenRef = useRef(null);
  const navCloseRef = useRef(null);
  const navItems = [
    { href: `${process.env.ASSET_PREFIX}/`, label: "About" },
    { href: `${process.env.ASSET_PREFIX}/projects`, label: "Projects" },
    { href: `${process.env.ASSET_PREFIX}/people`, label: "Talks" },
    { href: `${process.env.ASSET_PREFIX}/community`, label: "Community" },
    { href: `${process.env.ASSET_PREFIX}/events`, label: "Events" },
    { href: `${process.env.ASSET_PREFIX}/blog`, label: "News" },
    {
      href: `${process.env.ASSET_PREFIX}/cybersecurity_research`,
      label: "Cybersecurity",
    },
  ];
  useEffect(() => {
    if (open === null) {
      return;
    }
    if (open) {
      navCloseRef.current.focus();
    } else {
      navOpenRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      const focusableEls = document
        .querySelector(".nav")
        .querySelectorAll(".navigation__close, a[href]");
      const firstFocusableEl = focusableEls[0];
      const lastFocusableEl = focusableEls[focusableEls.length - 1];
      const listener = (event) => {
        if (event.keyCode === ESC) {
          setOpen(false);
        }
        if (event.key === "Tab" || event.keyCode === KEYCODE_TAB) {
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
      document.addEventListener("keydown", listener);

      return () => {
        document.removeEventListener("keydown", listener);
      };
    }
    return "";
  });

  return (
    <nav className={`nav ${open ? "open" : ""}`}>
      <button
        className="navigation__button"
        type="button"
        aria-expanded={!!open}
        aria-label="Expand navigation menu"
        onClick={() => setOpen(!open)}
        ref={navOpenRef}
      />
      <button
        className="navigation__close"
        type="button"
        aria-expanded={!!open}
        aria-label="Close navigation menu"
        onClick={() => setOpen(!open)}
        ref={navCloseRef}
      />
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
