import React from 'react';

function Header() {

  return (
    <div className="header">
      <style jsx>{`

          p {
            color: #7e9180;
            font-size: 12px;
            margin: 0 10px;
          }

          .header {
            position: sticky;
            top: 0;
          }

          .top-nav {
            background-color: #465b4c;
            padding-top: 0;
            height: 30px;
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 20px;
          }

          .left-nav {
            display: flex;
            align-items: center;
          }

          .left-nav input {
            font-family: 'Helvetica', sans-serif;
            height: 23px;
            outline: 0;
            background-color: #7e9180;
            border: none;
            font-size: 18px;
          }

          .left-nav input:focus {
            background-color: #d4dfd0;
          }


          .left-nav p, .left-nav button {
            text-transform: uppercase;
          }

          .submit-btn {
            background-color: #5eac74;
            padding: 7px;
            color: white;
            border: none;
            border-radius: 5px;
          }

          .right-nav {
            display: flex;
            align-items: center;
            background-color: #455749;
            height: 50px !important;
            width: 100px !important;
          }

          .right-nav:hover {
            background-color: #2c382e;
          }

          .bottom-nav {
            background-color: #29352b;
            height: 37px;
            display: flex;
            align-items: center;
            padding-left: 20px;
          }

          .bottom-nav h4 {
            padding-top: 8px;
            padding-bottom: 5px;
            color: white;
            font-weight: 400;
            border-bottom: 3px solid #455749;
          }

          `}</style>
      <div className="top-nav">
        <div className="left-nav">
          <img src="http://st.deviantart.net/minish/main/logo/logo-mark.png" />
          <img src="http://st.deviantart.net/minish/main/logo/logo-type.png" />
          <div>
            <input />
          </div>
          <p>Shop</p>
          <p>Forum</p>
          <p>More</p>
          <button className="submit-btn">Submit</button>
        </div>
        <div className="right-nav">
          <p>Join</p>
          <p>Login</p>
        </div>
      </div>
      <div className="bottom-nav">
        <h4>BROWSE</h4>
      </div>
    </div>
  );
}

export default Header;
