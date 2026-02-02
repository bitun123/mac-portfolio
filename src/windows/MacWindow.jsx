import React from "react";
import { Rnd } from "react-rnd";
import "./MacWindow.scss"
function MacWindow({children,width= "40vw",height = "60vh"}) {
  return (
    <Rnd 
    default={{
      width:width,
      height:height,
      x:470,
      y:80
    }}
    >
      <div className="window">
        <div className="nav">
            <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>
            <div className="title"><p>satyajit -zsh</p></div>
        </div>
        <div className="main-content">
            {children}
        </div>
      </div>
    </Rnd>
  );
}

export default MacWindow;
