import React from "react";
import "./dock.scss";

function Dock({ windowsState, setWindowsState }) {
  return (
    <footer className="doc">
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="" />
        <div className={`active-dot ${windowsState.github ? 'active' : '' }`}></div>
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, note: true }));
        }}
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="" />
        <div className={`active-dot ${windowsState.note ? 'active' : ''}`}></div>
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="" />
        <div className={`active-dot ${windowsState.resume ? 'active' : ''}`}></div>
      </div>
      <div className="icon calender">
        <img src="/doc-icons/calender.svg" alt="" />
        <div className="active-dot"></div>
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="" />
        <div className={`active-dot ${windowsState.spotify ? 'active' : ''}`}></div>
      </div>
      <div className="icon mail">
        <img src="/doc-icons/mail.svg" alt="" />
        <div className="active-dot"></div>
      </div>
      <div className="icon link">
        <img src="/doc-icons/link.svg" alt="" />
        <div className="active-dot"></div>
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: true }));
        }}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="" />
        <div className={`active-dot ${windowsState.cli ? 'active' : ''}`}></div>
      </div>
    </footer>
  );
}

export default Dock;
