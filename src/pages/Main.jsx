import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import React from "react";

function Main() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
    <div className="flex-1 flex flex-col bg-green-400 max-h-full">
      <div className="bg-black flex flex-1">
        <div className=" bg-white w-3/4">
          <Editor
            className="h-full"
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
        <div className=" bg-yellow-300 w-1/4">other</div>
      </div>
      <div className="bg-green-400 flex-1 ">2</div>
      <hr />
    </div>
  );
}

export default Main;
