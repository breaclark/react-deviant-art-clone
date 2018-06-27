import React from 'react';
import Header from './Header';
import Ad from './Ad';
import Sidebar from './Sidebar';
import Grid from './Grid';

function App(){
  return (
    <div>
      <style jsx global> {`
          * {
            padding: 0;
            margin: 0;
            font-family: 'Verdana', sans-serif;
          }

          .main-content {
            display: flex;
          }

          `}</style>
      <Header style="zIndex:2" />
      <Ad style="zIndex:-2" />
      <div className="main-content">
        <Sidebar />
        <Grid />
      </div>
    </div>
  );
}

export default App;
