import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ name, photoUrl, affiliation }) => (
  <section>
    <h2>{name}</h2>
    <figure>
      <img src={photoUrl} alt={name}/>
      <figcaption>{affiliation}</figcaption>
    </figure>
  </section>
);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired
};

export default Detail;
