import React from 'react';
import PropTypes from 'prop-types';

function Food(props){
  return (
    <div>
      <p>{props.foodName}</p>
    </div>
  );
}

Food.propTypes = {
  foodName: PropTypes.string
};

export default Food;
