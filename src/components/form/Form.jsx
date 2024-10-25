import { useState } from "react";
import { useShowFormModal, useTaskContext } from "../context/Context";
import { toast } from "react-toastify";

export default function Form() {
  const { showForm, setShowForm, updateValue, setUpdateValue } =
    useShowFormModal();
  const { dispatch } = useTaskContext();

  const [formValue, setFormValue] = useState(
    updateValue || {
      id: crypto.randomUUID(),
      taskName: "",
      description: "",
      date: "",
      category: "",
    }
  );

  const isAdd = !updateValue;

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (
      !formValue.taskName ||
      !formValue.description ||
      !formValue.date ||
      !formValue.category
    ) {
      toast.warning("⚠️ Please fill out all fields!", { autoClose: 2000 });
      return;
    }

    if (isAdd) {
      dispatch({ type: "ADD_TO_TASK", payload: formValue });
      toast.success("New task added successfully!", { autoClose: 2000 });
    } else {
      dispatch({ type: "UPDATE_TASK", payload: formValue });
      toast.success("✏️ Task updated successfully!", { autoClose: 2000 });
    }

    setUpdateValue(null);
    setFormValue({
      id: crypto.randomUUID(),
      taskName: "",
      description: "",
      date: "",
      category: "",
    });
    setShowForm(false);
  };

  const handleOnChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setFormValue({ ...formValue, [name]: newValue });
  };

  return (
    <div className="p-6">
      <h2 className="mb-6 text-2xl font-bold text-green-400">
        {isAdd ? "Create Task" : "Edit Task"}
      </h2>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-4 space-y-1">
          <label
            htmlFor="taskName"
            className="mb-1 block text-sm font-medium text-gray-300"
          >
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            value={formValue.taskName}
            onChange={handleOnChange}
            // required
            className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4 space-y-1">
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            // required
            value={formValue.description}
            onChange={handleOnChange}
            className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <div className="mb-4 space-y-1">
          <label
            htmlFor="dueDate"
            className="mb-1 block text-sm font-medium text-gray-300"
          >
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="date"
            // required
            value={formValue.date}
            onChange={handleOnChange}
            className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4 space-y-1">
          <label
            htmlFor="category"
            className="mb-1 block text-sm font-medium text-gray-300"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            // required
            value={formValue.category}
            onChange={handleOnChange}
            className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Category</option>
            <option value="todo">To-Do</option>
            <option value="inprogress">On Progress</option>
            <option value="done">Done</option>
            <option value="revised">Revised</option>
          </select>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => {
              setUpdateValue(null);
              setShowForm(!showForm);
            }}
            className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            {isAdd ? "Create Task" : "Edit Task"}
          </button>
        </div>
      </form>
    </div>
  );
}
