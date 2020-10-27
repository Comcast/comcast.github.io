import data from '../../data/_document.json';

const Footer = () => (
  <footer>
    <h2>{data.footer}</h2>
    <p>
      &copy;
      {data.copyright}
    </p>
  </footer>
);

export default Footer;
