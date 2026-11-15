
// Defines the only three valid task statuses.
export type TaskStatus = "pending" | "in-progress" | "completed";

// Defines the structure of an individual task.
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

// Defines the props required by the TaskList component.
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// Defines the props required by an individual TaskItem.
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// Defines the callback required by TaskFilter.
// The filter properties are optional so either filter can be used independently.
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => void;
}
