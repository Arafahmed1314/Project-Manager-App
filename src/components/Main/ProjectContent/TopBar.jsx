import { useShowFormModal } from "../../context/Context";
import AddIcon from "../../SvgIcon/AddIcon";

export default function TopBar() {
  const { showForm, setShowForm } = useShowFormModal();
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold">Projectify</h2>
      <div className="flex space-x-2">
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
        >
          <AddIcon />
          Add
        </button>
      </div>
    </div>
  );
}
