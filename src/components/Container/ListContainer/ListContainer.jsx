import React from 'react';
import PropTypes from 'prop-types';
import List from '../../presentational/List/List';


const ListContainer = ({ characters, changePage, page }) => {

  const decrementPage = () => {
    changePage(-1);
  };
  const incrementPage = () => changePage(1);
 
  return (
    <section>
      {page > 1 && <button onClick={decrementPage}>Prev Page</button>}
      <button onClick={incrementPage}>Next Page</button>
      <List characters={characters} />
    </section>
  );
};

ListContainer.propTypes = {
  characters: PropTypes.array.isRequired,
  changePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};
export default ListContainer;
