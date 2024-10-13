import React from "react";

const Toast = ({ type, message, onClose }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "green";
      case "warning":
        return "orange";
      case "failure":
        return "red";
      case "info":
      default:
        return "blue";
    }
  };

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(),
        color: "white",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      {message}
      <button onClick={onClose} style={{ marginLeft: "10px", color: "white" }}>
        X
      </button>
    </div>
  );
};

export default Toast;
