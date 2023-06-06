import React from "react";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/dracula";

export default class Editor extends React.Component {
  render() {
    return (
      <AceEditor
        style={{
          width: "90%",
          height: "90%",
        }}
        mode="javascript"
        theme="dracula"
      />
    );
  }
}
