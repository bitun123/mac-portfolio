import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";
function Nav({ windowsState, setWindowsState }) {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="./navbar-icons/apple.svg" alt="" />
        </div>

        <div className="nav-item">
          <p>satyajit das mahapatra</p>
        </div>
        <div className="nav-item">
          <p 
              onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }));
        }}
          >File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p
            onClick={() => {
              setWindowsState((state) => ({ ...state, cli: true }));
            }}
          >
            Terminal
          </p>
          
        </div>
      </div>
      <div className="right">
        <div className="nav-icon">
          <img src="/navbar-icons/wifi.svg" alt="" />
        </div>
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
