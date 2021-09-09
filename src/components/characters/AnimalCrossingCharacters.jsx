import React from 'react';
import PropTypes from 'prop-types';

const AnimalCrossingCharacter = ({ name, quote, personality }) => (
  <>
    <p>{name}</p>
    <p>{quote}</p>
    <p>{personality}</p>
  </>
);

AnimalCrossingCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired
};

export default AnimalCrossingCharacter;
