import { ShowFormModelProvider } from "../context/Context";
import ProjectContent from "./ProjectContent/ProjectContent";
import SearchBar from "./SearchBar";

export default function MainContent() {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      <ShowFormModelProvider>
        <SearchBar />
        <ProjectContent />
      </ShowFormModelProvider>
    </div>
  );
}
