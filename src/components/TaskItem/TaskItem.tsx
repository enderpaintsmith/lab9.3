
import type { TaskItemProps, TaskStatus } from "../../types";

export function TaskItem({
  task,
  onStatusChange,
  onDelete
}: TaskItemProps) {

  function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = event.target.value as TaskStatus;
    onStatusChange(task.id, newStatus);
  }

  return (
    <article className={`task-item ${task.status} ${task.priority}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <label htmlFor={`status-${task.id}`}>Status: </label>
      <select
        id={`status-${task.id}`}
        value={task.status}
        onChange={handleStatusChange}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>

      {task.status === "completed" && (
        <p className="completed-message">Task completed!</p>
      )}

      {task.priority === "high" && (
        <p className="priority-warning">High priority task</p>
      )}

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </article>
  );
}
