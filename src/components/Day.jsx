import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  return (
    <div>
      <h3>{props.dayName}</h3>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}

Day.propTypes = {
  dayName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;
