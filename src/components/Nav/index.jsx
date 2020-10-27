import styles from './style.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li><a href={`${process.env.ASSET_PREFIX}/`}>About</a></li>
      <li><a href={`${process.env.ASSET_PREFIX}/projects`}>Projects</a></li>
      <li><a href={`${process.env.ASSET_PREFIX}/people`}>People</a></li>
      <li><a href={`${process.env.ASSET_PREFIX}/community`}>Community</a></li>
      <li><a href={`${process.env.ASSET_PREFIX}/events`}>Events</a></li>
      <li><a href={`${process.env.ASSET_PREFIX}/blog`}>Blog</a></li>
    </ul>
  </nav>
);

export default Nav;
