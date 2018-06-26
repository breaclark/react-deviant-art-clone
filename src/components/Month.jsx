import React from 'react';
import PropTypes from 'prop-types';
import Selection from './Selection';

function Month(props){
  return (
    <div>
      <h3>{props.monthName}</h3>
      <Selection selection={props.selection}/>
    </div>
  );
}

Month.propTypes = {
  monthName: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};

export default Month;
