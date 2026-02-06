import React from "react";
import MacWindow from "../MacWindow";
import "./linkdin.scss";

function Linkdin({ windowName, windowsState, setWindowsState }) {
  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setWindowsState={setWindowsState}
         width="50vw"
    >
      <div className="home">
        <div className="navbar">
          <div className="navLeft">
            <div className="navLogo">
              <img src="/doc-icons/link.svg" alt="" />
            </div>
            <div className="searchBar">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="navRight">
            <div className="icons">
              <div className="icon">
                <i className="ri-home-4-fill"></i>
                <h1>Home</h1>
              </div>
              <div className="icon">
                <i className="ri-user-fill"></i>
                <h1>Profile</h1>
              </div>
              <div className="icon">
                <i className="ri-briefcase-fill"></i>
                <h1>Jobs</h1>
              </div>
              <div className="icon">
                <i className="ri-chat-1-fill"></i>
                <h1>Messages</h1>
              </div>
              <div className="icon">
                <i className="ri-notification-3-fill"></i>
                <h1>Notifications</h1>
              </div>
              <div className="icon">
                <img src="/image/image7.png" alt="" />
                <h1>Me</h1>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </MacWindow>
  );
}

export default Linkdin;
