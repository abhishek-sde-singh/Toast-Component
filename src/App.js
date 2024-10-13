import "./App.css";
// import ToastManager from "./ToastManager";
import ToastProvider from "./ScalableToast";
import TestToast from "./TestToast";

function App() {
  return (
    <ToastProvider>
      <TestToast />
    </ToastProvider>
    // <ToastManager />
  );
}

export default App;
