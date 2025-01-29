import PropTypes from "prop-types";
import { backgroundColor } from "src/shared/backgroundColors";
import { borderColor } from "src/shared/borderColors";

import {
  header,
  content,
  title as titleStyle,
  image as imageStyle,
  featuredImage,
} from "./style.module.css";

const Header = ({ title, image, color }) => (
  <header
    className={`${header} ${image ? featuredImage : ""} ${backgroundColor(
      color
    )} ${borderColor(color)}`}
  >
    <section className={content}>
      <h1 className={titleStyle}>{title}</h1>
    </section>
    {image ? (
      <section className={imageStyle}>
        <img
          src={`${process.env.ASSET_PREFIX}${image}`}
          alt=""
          preload="true"
          layout="fill"
          objectfit="cover"
          objectposition="center"
        />
      </section>
    ) : null}
  </header>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string,
};
