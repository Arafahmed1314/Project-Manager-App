/* eslint-disable react/prop-types */
// import { useShowFormModal } from "../../context/Context";
import { useState } from "react";
import { useShowFormModal, useTaskContext } from "../../context/Context";
import DeleteIcon from "../../SvgIcon/DeleteIcon";
import EditIcon from "../../SvgIcon/EditIcon";
import SortIcon from "../../SvgIcon/SortIcon";
import PopUp from "./PopUp";
import { toast } from "react-toastify";
export default function TaskCategory({ color, category, value }) {
  const [sort, setSort] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [deletedId, setDeletedId] = useState();
  let sortedItems;
  if (sort) {
    sortedItems = value.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else {
    sortedItems = value.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  const { setUpdateValue, setShowForm } = useShowFormModal();
  const { dispatch } = useTaskContext();
  const handleDelete = (id) => {
    // setValue((prev) => prev.filter((value) => value.id !== id));
    dispatch({ type: "REMOVE_FROM_TASK", payload: id });

    toast.success("🗑️ Task has been removed successfully!", {
      autoClose: 2000,
    });
  };
  const handleDeleteTask = (res) => {
    if (res === "yes") {
      handleDelete(deletedId);
      setShowPop(false);
    } else {
      setShowPop(false);
    }
  };
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      {showPop && <PopUp acknowledge={handleDeleteTask} />}

      <div
        style={{ backgroundColor: color }}
        className={"rounded-lg bg-indigo-600 p-4"}
      >
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {category} ({value.length})
          </h3>

          <button onClick={() => setSort(!sort)}>
            <SortIcon />
          </button>
        </div>
        <div>
          {sortedItems.length > 0 ? (
            sortedItems.map((task) => (
              <div key={task.id} className="mb-4 rounded-lg bg-gray-800 p-4">
                <div className="flex justify-between">
                  <h4
                    style={{ color: color }} // Inline style to dynamically change the color
                    className="mb-2 flex-1 font-semibold"
                  >
                    {task.taskName}
                  </h4>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setShowPop(!showPop);
                        setDeletedId(task.id);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                    <button
                      onClick={() => {
                        setShowForm(true);
                        setUpdateValue(task);
                      }}
                    >
                      <EditIcon />
                    </button>
                  </div>
                </div>
                <p className="mb-2 text-sm text-zinc-200">{task.description}</p>

                <p className="mt-6 text-xs text-zinc-400">{task.date}</p>
              </div>
            ))
          ) : (
            <p className="text-base text-zinc-300 font-medium text-center p-2 bg-zinc-700 rounded-lg shadow-md">
              📋 Task List is empty!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
