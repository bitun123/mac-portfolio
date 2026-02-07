import React from "react";
import MacWindow from "../MacWindow";
import DomeGallery from "./DomeGallery";
function Skills({ windowName, windowsState, setWindowsState }) {
  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setWindowsState={setWindowsState}
      width="60vw"
      height="80vh"
    >
      <div style={{ width: "100%", height: "100vh" }}>
        <DomeGallery
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale
        />
      </div>
    </MacWindow>
  );
}

export default Skills;
