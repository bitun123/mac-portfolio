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
        <div className="page1">
          <div className="backgroundPic">
            <img src="/image/image8.png" alt="" />
            <button>
              <i className="ri-pencil-line"></i>
            </button>
          </div>
          <div className="profile">
            <img src="/image/image7.png" alt="" />
          </div>
          <div className="backgroundContent">
            <button className="pencil">
              <i className="ri-pencil-line"></i>
            </button>

            <h1>
              satyajit Das Mahapatra <i className="ri-shield-check-line"></i>{" "}
              <span>He/Him</span>
            </h1>
            <p>
              FRONTEND DEVELOPER || REACT JS | JAVASCRIPT | TAILWIND CSS |{" "}
              <br /> SCSS | CSS | HTML | GSAP | REDUX
            </p>
            <p className="secondPara">
              Contai-I, West Bengal, India <span>· Contact info</span>
              <br />
              <span>251 connections</span>
            </p>
            <div className="buttons">
              <button className="btn firstBtn">Open to</button>
              <button className="btn secondBtn">Add Section</button>
              <button className="btn thirdBtn">Enhance profile</button>
              <button className="btn fourthBtn">
                <i className="ri-more-fill"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="page2">
          <div className="topcontent">
            <h1>Analytics</h1>
            <h2>
              {" "}
              <i className="ri-eye-line"></i>
              <span>Private to you</span>
            </h2>
          </div>
          <div className="buttonContent">
            <div className="analyticCont">
              <div className="analyticlogo">
                <i class="ri-group-3-fill"></i>
              </div>
              <div className="content">
                <h1>88 profile views</h1>
                <p>Discover who's viewed your profile</p>
              </div>
            </div>

            <div className="analyticCont">
              <div className="analyticlogo">
                <i className="ri-bar-chart-fill"></i>
              </div>
              <div className="content">
                <h1>330 connections</h1>
                <p>Discover who's connected with you</p>
              </div>
            </div>

            <div className="analyticCont">
              <div className="analyticlogo">
                <i className="ri-search-line"></i>
              </div>
              <div className="content">
                <h1> 2 Search activity</h1>
                <p>Discover what you've searched for</p>
              </div>
            </div>
          </div>
          <div className="showSkill">
            <h1>
              Show all <i className="ri-arrow-right-line"></i>
            </h1>
          </div>
        </div>
        <div className="page3">
          <i className="ri-pencil-line"></i>
          <div className="page3content">
            <h1>About</h1>
            <p>
              I am hard working have positive attitude keen to learn new things,
              and enjoy working in a team environment . Among my other strengths
              are comprehensive problem solving abilities , excellent verbal and
              written communication skills, ability to deal with people
              diplomatically , willingness to learn and team facilitator.
            </p>
          </div>
        </div>
      </div>
    </MacWindow>
  );
}

export default Linkdin;
