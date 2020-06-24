import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const List = ({ characters }) => {

  const charList = characters.map(char => {
    return (<li key={ char._id}>
      <Link  to={`/characters/${char._id}`}>{char.name}</Link>;
    </li>);
  });
  return (
    <ul>
      {charList}
    </ul>
  );
};

List.propTypes = {
  characters: PropTypes.array.isRequired
};

export default List;
