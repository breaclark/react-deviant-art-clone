import React from 'react';
import PropTypes from 'prop-types';
import Food from './Food';

function Selection(props){
  return (
    <div>
      {
        props.selection.map((foodObject, index) =>
          <Food foodName={foodObject}
            key={index}/>
        )}
    </div>
  );
}

Selection.propTypes = {
  foodName: PropTypes.string,
  selection: PropTypes.array
};

export default Selection;
