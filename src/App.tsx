import React from "react";
import "./App.css";

import TinyMceEditor from "./TinyMceEditor";

import TestUseDebounce from "./DemoHooks/useDebounceHook";

function App() {
  return (
    <div className="App">
      <div className="demo-wrapper">
        {/* DEMO: TinyMceEditor */}
        <TinyMceEditor visible={false} />

        {/* HOOK: useDebounce */}
        <TestUseDebounce />
      </div>
    </div>
  );
}

export default App;
