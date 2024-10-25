import MainContent from "./components/Main/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
      <ToastContainer />
    </div>
  );
}

export default App;
