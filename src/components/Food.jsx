import React from 'react';
import PropTypes from 'prop-types';

function Food(props){
  return (
    <div className='food'>
      <style jsx>{`
        .food {
          margin: 14px;
        }
      `}
      </style>
      <p>{props.foodName}</p>
    </div>
  );
}

Food.propTypes = {
  foodName: PropTypes.string
};

export default Food;
