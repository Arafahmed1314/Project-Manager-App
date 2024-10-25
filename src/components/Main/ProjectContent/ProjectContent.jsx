import { useShowFormModal } from "../../context/Context";
import FromModal from "../../form/FromModal";
import TaskModal from "./TaskModal";
import TopBar from "./TopBar";

export default function ProjectContent() {
  //   const { showForm } = useShowFormModal();
  const { showForm } = useShowFormModal();
  return (
    <div className="mx-auto max-w-7xl p-6">
      <TopBar />
      <TaskModal />
      {showForm && <FromModal />}
    </div>
  );
}
