import { useSearchContext, useTaskContext } from "../../context/Context";
import TaskCategory from "./TaskCategory";

export default function TaskModal() {
  const { state } = useTaskContext();
  const { searchValue } = useSearchContext();
  const filterValue = state.taskData.filter((value) =>
    value.taskName.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(state);
  const todo = filterValue.filter((item) => item.category === "todo");
  const done = filterValue.filter((item) => item.category === "done");
  const progress = filterValue.filter((item) => item.category === "inprogress");
  const revised = filterValue.filter((item) => item.category === "revised");

  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      <TaskCategory color={"#4F46E5"} category="To-Do" value={todo} />
      <TaskCategory color={"#EAB308"} category="In Progress" value={progress} />
      <TaskCategory color={"#14B8A6"} category="Done" value={done} />
      <TaskCategory color={"#F43F5E"} category="Revised" value={revised} />
    </div>
  );
}
