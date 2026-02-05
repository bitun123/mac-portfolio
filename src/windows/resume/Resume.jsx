import React from "react";
import MacWindow from "../MacWindow";
import "./resume.scss"
function Resume({ windowName, windowsState, setWindowsState }) {
  return (
    <MacWindow windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState} >
      <div className="resume_window">

      {/* Hide PDF viewer toolbar via URL fragment (works with some viewers) */}
      <iframe src="/resume.pdf#toolbar=0&navpanes=0" frameBorder={0} title="Resume"></iframe>
      </div>
    </MacWindow>
  );
}

export default Resume;
