import React from "react";
import IProgressBarProps from "./IProgressBarProps";

const ProgressBar: React.FC<IProgressBarProps> = ({ progress }) => {
  console.log(progress);

  return (
    <div
      className="progressbar"
      style={{
        width: "95%",
        backgroundColor: "whiteSmoke",
        borderRadius: "16px",
        padding: "3px",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "20px",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};
export default ProgressBar;
