import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../presentational/Header/Header';
import Detail from '../../presentational/Detail/Detail';
import { useParams } from 'react-router-dom';

const DetailContainer = ({ characters }) => {
  const { id } = useParams();
  const character = characters.filter(char => char._id ===  id);
  return (
    <>
      <Header />
      <Detail {...character} />
    </>
  );
};

DetailContainer.propTypes = {
  characters: PropTypes.array.isRequired
};
