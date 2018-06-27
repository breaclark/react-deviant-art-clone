import React from 'react';

function Sidebar(){
  return (
    <div className="side-bar">
      <style jsx>{`
          .side-bar {
            padding-top: 10px;
            border-right: 1px solid #a8bba7;
            width: 550px;
            background-color: #dbe3d6;
            height: 80vh;

          }

          .side-bar h5 {
            font-family: helvetica neue, sans-serif;
            text-transform: uppercase;
            font-size: 11px;
            color: #526154;
            padding-left: 15px;
            padding-top: 15px;
            padding-bottom: 5px;
            font-weight: 500;
          }

          .side-bar p {
            font-size: 11px;
            color: #337287;
            line-height: 20px;
            padding-left: 15px;
          }

          .side-bar div input {
            margin-top: 8px;
            margin-left: 10px;
            height: 25px;
            outline: none;
            width: 85%;
            border: 1px solid black;
          }

          .hamburger {
            background-color: #c9d2c6;
            width: 50px;
            height: 14px;
            padding-top: 10px;
            padding-right: 6px;
            padding-bottom: 4px;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            box-shadow: inset -7px 0px 19px 0px rgba(0,0,0,0.43);
          }

          .ham-line {
            background-color: #809584;
            height: 3px;
            width: 14px;
            margin-left: 30px;
            margin-bottom: 1px;
            box-shadow: 0px 1px 0px 0px rgba(255,255,255,1);
          }

          `}
      </style>
      <div className="hamburger">
        <div className="ham-line">
        </div>
        <div className="ham-line">
        </div>
        <div className="ham-line">
        </div>
      </div>
      <div className="sort-category">
        <h5>Sort</h5>
        <p>Newest</p>
        <p>What's Hot</p>
        <p>Undiscovered</p>
        <p>Daily Deviations</p>
        <p>Popular 24 hours</p>
        <p>More ...</p>
      </div>
      <div className="search">
        <h5>Search</h5>
        <input />
      </div>
      <div >
        <h5>Categories</h5>
        <p>Digital Art</p>
        <p>Traditional Art</p>
        <p>Photography</p>
        <p>Artisan Crafts</p>
        <p>Literature</p>
        <p>Film & Animation</p>
        <p>Motion Books</p>
        <p>Digital Art</p>
        <p>Traditional Art</p>
        <p>Photography</p>
        <p>Artisan Crafts</p>
        <p>Literature</p>
        <p>Film & Animation</p>
        <p>Motion Books</p>
      </div>
    </div>
  );
}

export default Sidebar;
