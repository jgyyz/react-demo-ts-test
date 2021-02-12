import React from "react";
import "./App.css";

import TinyMceEditor from "./TinyMceEditor";

import TestUseDebounce from "./DemoHooks/useDebounceHook";
import TestUseThrottle from "./DemoHooks/useThrottleHook";

function App() {
  return (
    <div className="App">
      <div className="demo-wrapper">
        {/* DEMO: TinyMceEditor */}
        <TinyMceEditor visible={false} />

        {/* HOOK: useDebounce */}
        <TestUseDebounce visible={false} />
        {/* HOOK: useThrottle */}
        <TestUseThrottle />
      </div>
    </div>
  );
}

export default App;
