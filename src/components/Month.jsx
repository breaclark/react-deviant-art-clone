import React from 'react';
import PropTypes from 'prop-types';
import Selection from './Selection';

function Month(props){
  return (
    <div className='month'>
      <style jsx>{`
          .month {
            border: 1px dashed black;
            margin: 10px;
            padding: 0 10px;
          }
      `}</style>
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
