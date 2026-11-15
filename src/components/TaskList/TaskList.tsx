
import { TaskItem } from "../TaskItem/TaskItem";
import type { TaskListProps } from "../../types";

// Destructures all three props from the props object and types them with TaskListProps.
export function TaskList({
  tasks,
  onStatusChange,
  onDelete
}: TaskListProps) {

  return (
    <section className="task-list">
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No tasks to display.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))
      )}
    </section>
  );
}
