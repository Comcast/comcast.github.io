import PropTypes from 'prop-types';
import { formatDate } from 'src/shared/formatDate';

import {
  dataTable,
  date,
  dateValue,
} from './style.module.css';

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
          <tr key={`updated_${row.node.name}`}>
            <th>
              <p><a href={row.node.url}>{row.node.name}</a></p>
              <p className={date}>
                updated: <span className={dateValue}>{formatDate(row.node.updatedAt)}</span>
              </p>
              <p className={date}>
                created: <span className={dateValue}>{formatDate(row.node.createdAt)}</span>
              </p>
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
  data: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      createdAt: PropTypes.string,
      description: PropTypes.string,
      forkCount: PropTypes.number,
      isArchived: PropTypes.bool,
      languages: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string,
          }),
        })),
      }),
      name: PropTypes.string,
      repositoryTopics: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            topic: PropTypes.shape({
              name: PropTypes.string,
            }),
          }),
        })),
      }),
      stargazerCount: PropTypes.number,
      updatedAt: PropTypes.string,
      url: PropTypes.string,
    }),
  })).isRequired,
};
