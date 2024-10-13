import React, { useState, createContext, useContext } from "react";
import Toast from "./Toast";

const ToastContext = createContext();
export const useToast = () => {
  return useContext(ToastContext);
};

const ToastProvider = ({ children }) => {
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
    <ToastContext.Provider value={{ addToast }}>
      <h1>ToastProvider</h1>
      {children}
      <div style={{ position: "fixed", top: "0.5rem", right: "0.5rem" }}>
        {toasts.map((item, index) => {
          return (
            <Toast
              key={item.id}
              type={item.type}
              onClose={() => handleClose(item.id)}
              message={item.message}
            />
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
