import React from "react";
import "./App.css";

import TinyMceEditor from "./TinyMceEditor";

import TestUseDebounce from "./DemoHooks/useDebounceHook";
import TestUseThrottle from "./DemoHooks/useThrottleHook";
import Countup from "./SimpleCountup/Countup";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="App">
      <div className="demo-wrapper">
        {/* DEMO: TinyMceEditor */}
        <TinyMceEditor visible={false} />

        {/* HOOK: useDebounce */}
        <TestUseDebounce visible={false} />
        {/* HOOK: useThrottle */}
        <TestUseThrottle visible={false} />

        {/* DEMO: Simple Countup */}
        <Countup end={123} visible={false} />

        <Carousel visible />

      </div>
    </div>
  );
}

export default App;
