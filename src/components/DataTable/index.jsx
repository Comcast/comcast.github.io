import PropTypes from 'prop-types';

import {
  dataTable,
} from './style.module.css';

//TODO move to shared functions
const monthLongName = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${monthLongName[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

const DataTable = ({ data }) => (
  <table className={dataTable}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th><img height="24" width="24" src={`${process.env.ASSET_PREFIX}/images/star.svg`} alt="stargazers" /></th>
        <th><img height="24" width="24" src={`${process.env.ASSET_PREFIX}/images/fork.svg`} alt="forks" /></th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((row) => (
          <tr>
            <th>
              <p><a href={row.node.url}>{row.node.name}</a></p>
              <p style={{ fontSize: '.9rem', fontWeight: 300, marginBottom: 0 }}>updated: {formatDate(row.node.updatedAt)}</p>
              <p style={{ fontSize: '.9rem', fontWeight: 300 }}>created: {formatDate(row.node.createdAt)}</p>
            </th>
            <td>
              <p style={{ marginBottom: '2rem' }}>{row.node.description || 'An Open Source project from Comcast.'}</p>
              {!!row.node.repositoryTopics.edges.length && <p style={{ fontSize: '.9rem', marginBottom: 0 }}> <strong style={{ fontWeight: 400 }}>tags:</strong> {row.node.repositoryTopics.edges.map((topic, index) => (`${topic.node.topic.name}${index < row.node.repositoryTopics.edges.length - 1 ? ', ' : ''}`))}</p>}
              {!!row.node.languages.edges.length && <p style={{ fontSize: '.9rem' }}><strong style={{ fontWeight: 400 }}>languages:</strong> {row.node.languages.edges.map((language, index) => (`${language.node.name}${index < row.node.languages.edges.length - 1 ? ', ' : ''}`))}</p>}
            </td>
            <td>{row.node.stargazerCount}</td>
            <td>{row.node.forkCount}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default DataTable;

DataTable.propTypes = {
  data: PropTypes.arrayOf.isRequired,
};
