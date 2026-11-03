
import { useState } from "react";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import type { Task, TaskStatus } from "./types";
import "./App.css";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Complete React Lab",
    description: "Practice lists, keys, and conditional rendering.",
    status: "in-progress",
    priority: "high",
    dueDate: "2026-11-06"
  },
  {
    id: "2",
    title: "Review TypeScript",
    description: "Review interfaces, props, and state.",
    status: "pending",
    priority: "medium",
    dueDate: "2026-11-07"
  },
  {
    id: "3",
    title: "Update GitHub",
    description: "Upload the completed project.",
    status: "completed",
    priority: "low",
    dueDate: "2026-11-08"
  }
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  function handleStatusChange(taskId: string, newStatus: TaskStatus) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  }

  function handleDelete(taskId: string) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      !filters.status || task.status === filters.status;

    const matchesPriority =
      !filters.priority || task.priority === filters.priority;

    return matchesStatus && matchesPriority;
  });

  return (
    <main>
      <h1>Task Manager</h1>

      <TaskFilter onFilterChange={setFilters} />

      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default App;
