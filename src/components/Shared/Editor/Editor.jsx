'use client';

import React, { useEffect, useRef } from "react";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror.css";
import CodeMirror from "codemirror";

const Editor = () => {
  const editorRef=useRef(null)
  useEffect(() => {
    const init = async () => {
      const editor = CodeMirror.fromTextArea(
      document.getElementById('realTimeEditor'),
      {
        mode: { name: 'javascript', json: true },
        theme: 'dracula',
        lineNumbers: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
      }
      );
      editor.setSize(null,"100%")
    }
    init();
  }, []);

  return (
    <div className="h-full">
      <textarea id="realTimeEditor" />
    </div>
  );
};

export default Editor;
