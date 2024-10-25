import MainContent from "./components/Main/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
