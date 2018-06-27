import React from 'react';
import Header from './Header';

function App(){
  return (
    <div>
      <style jsx global> {`
          * {
            padding: 0;
            margin: 0;
            font-family: 'Verdana', sans-serif;
          }
          `}</style>
      <Header />
    </div>
  );
}

export default App;
