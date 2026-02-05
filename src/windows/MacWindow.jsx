// import React, { useEffect } from "react";
// import { Rnd } from "react-rnd";
// import "./MacWindow.scss"
// function MacWindow({children,width= "40vw",height = "60vh", windowName, windowsState, setWindowsState }) {
// useEffect(() => {
//   // safety: agar required cheezein nahi hain to kuch mat karo
//   if (!windowName || !windowsState) return;

//   // sirf tab run ho jab window "Failed" ho
//   if (windowsState[windowName] === "Failed") {
//     const timer = setTimeout(() => {
//       setWindowsState((state) => ({
//         ...state,
//         [windowName]: false,
//       }));
//     }, 200);

//     // cleanup
//     return () => clearTimeout(timer);
//   }
// }, [windowsState, windowName, setWindowsState]);


//   return (
//     <Rnd 
//     default={{
//       width:width,
//       height:height,
//       x:470,
//       y:80
//     }}
//     >
//       <div className="window">
//         <div className="nav">
//             <div className="dots">
//                 <div 
//                 onClick={()=>setWindowsState((state)=>({...state,[windowName]:"Failed"}))}
//                 className="dot red"></div>
//                 <div className="dot yellow"></div>
//                 <div className="dot green"></div>
//             </div>
//             <div className="title"><p>satyajit -zsh</p></div>
//         </div>
//         <div className="main-content">
//             {children}
//         </div>
//       </div>
//     </Rnd>
//   );
// }

// export default MacWindow;


import React from "react";
import { Rnd } from "react-rnd";
import "./MacWindow.scss"
function MacWindow({children,width= "40vw",height = "60vh", setWindowsState,windowName}) {
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
                <div 
                 onClick={()=>setWindowsState((state)=>({...state,[windowName]:false}))}
                className="dot red"></div>
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