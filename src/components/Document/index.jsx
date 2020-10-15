import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { borderColor } from 'src/shared/borderColors';

import {
  document,
} from './style.module.css';

const Document = ({ file, color }) => (
  <article className={`${document} ${borderColor(color)}`}>
    <ReactMarkdown>{file}</ReactMarkdown>
  </article>
);

export default Document;

Document.propTypes = {
  file: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
