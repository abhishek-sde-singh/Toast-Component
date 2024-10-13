import React from "react";
import { useToast } from "./ScalableToast";

const TestToast = () => {
  const { addToast } = useToast();
  return (
    <div>
      <h1>TestToast</h1>
      <button onClick={() => addToast("success", "it's working")}>
        Success Toast Scalable
      </button>
    </div>
  );
};

export default TestToast;
