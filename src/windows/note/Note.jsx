import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import MacWindow from "../MacWindow";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./note.scss"
function Note() {
  const [markdown, setmarkdown] = useState(null);

  useEffect(() => {
    fetch("./note.txt")
      .then((res) => res.text())
      .then((text) => setmarkdown(text));
  }, []);
  return (
    <MacWindow>
      <div className="note-window">
        {Markdown ? (
          <SyntaxHighlighter language="javascript" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading ....</p>
        )}
      </div>
    </MacWindow>
  );
}

export default Note;
