import React, { useState } from "react";
import Toast from "./Toast";

const ToastManager = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      handleClose(id);
    }, 3000);
  };
  const handleClose = (id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h1>ToastManager</h1>
      <div style={{ position: "fixed", top: "0.5rem", right: "0.5rem" }}>
        {toasts.map((item, index) => {
          return (
            <Toast
              key={index}
              type={item.type}
              onClose={() => handleClose(item.id)}
              message={item.message}
            />
          );
        })}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => addToast("success", "Success Message")}>
          Show Success Toast
        </button>
        <button onClick={() => addToast("failure", "Failure Message")}>
          Show Failure Toast
        </button>
        <button onClick={() => addToast("info", "Info Message")}>
          Show Info Toast
        </button>
      </div>
    </div>
  );
};

export default ToastManager;
