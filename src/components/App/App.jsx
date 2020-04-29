import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../presentational/List/List';
import DetailContainer from '../Container/DetailContainer/DetailContainer';
import { fetchCharacters } from '../../services/avatar';
import ListContainer from '../Container/ListContainer/ListContainer';


export default function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCharacters(page)
      .then(characters => setCharacters(characters));
  }, [page]);

  const changePage = (direction) => {
    setPage((prevPage) => prevPage + direction);
  };
  return (
    <Router>
      <Switch>
        <Route path="/characters/:id">
          <DetailContainer characters={characters} />
        </Route>
        <Route path="/">
          <ListContainer page={page} characters={characters} changePage={changePage} />
        </Route>

      </Switch>
    </Router>
  );
}
  
