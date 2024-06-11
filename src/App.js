import { ToastContainer } from "react-toastify";
import ChatFlowBuilder from "./components/ChatFlowBuilder";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main>
      <ChatFlowBuilder />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
