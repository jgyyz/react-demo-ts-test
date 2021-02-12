import React, { useState } from "react";
import useThrottle from "./useThrottle";

interface ITestProps {
  visible?: boolean;
}

const TestComp: React.FC<ITestProps> = ({ visible = true }) => {
  const [count, setCount] = useState(0);

  const onClick = useThrottle((value: number) => {
    setCount(value);
  }, 1000);

  if (!visible) return <></>;
  return (
    <div>
      <div style={{ fontWeight: "bold" }}>{`点赞了 ${count} 次`}</div>
      <button onClick={() => onClick(count + 1)}>点个赞呗</button>
    </div>
  );
};

export default TestComp;
