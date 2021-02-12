import React from "react";
import useDebounce from "./useDebounce";

interface ITestProps {
  visible?: boolean;
}

const TestComp: React.FC<ITestProps> = ({ visible = true }) => {
  const onChange = useDebounce((value: string) => {
    console.log("input value: ", value);
  }, 3000);

  if (!visible) return <></>;
  return (
    <div>
      <input onChange={(event) => onChange(event.target.value)} />
    </div>
  );
};

export default TestComp;
