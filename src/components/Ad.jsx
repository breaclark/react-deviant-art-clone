import React from 'react';

function Ad(){
  return (
    <div className="ad">
      <style jsx>{`
          .ad {
            display: flex;
            justify-content: center;
            position: relative;
            background-color: #c5d2bd;
          }

          .close-ad {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #dd433f;
            height: 22px;
            width: 22px;
            border-radius: 100%;
            border: 1px solid gray;
            color: white;
            padding-left: 5px;
            box-sizing: border-box;
          }
      `}</style>
      <img  src="https://tpc.googlesyndication.com/simgad/8118206081835431195" alt="ad" />
      <p className="close-ad">x</p>
    </div>
  );
}

export default Ad;
