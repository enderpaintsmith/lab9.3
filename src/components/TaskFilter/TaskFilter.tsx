import { useState } from "react";
import type { TaskFilterProps, TaskStatus } from "../../types";

type TaskPriority = "low" | "medium" | "high";

// Lets the user choose filters and reports them to the parent through onFilterChange.
// It doesn't filter anything itself; App.tsx does the actual filtering.
export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  // Local state keeps each dropdown showing the current selection.
  // "" represents "All" (no filter selected).
  const [status, setStatus] = useState<TaskStatus | "">("");
  const [priority, setPriority] = useState<TaskPriority | "">("");

  function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = event.target.value as TaskStatus | "";

    setStatus(newStatus);
    // Send both filters to the parent. "|| undefined" converts "" into undefined,
    // which App.tsx treats as "no filter" (!filters.status is true).
    onFilterChange({
      status: newStatus || undefined,
      priority: priority || undefined
    });
  }

  function handlePriorityChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newPriority = event.target.value as TaskPriority | "";

    setPriority(newPriority);
    // Uses the new priority value, plus the current status so it isn't lost.
    onFilterChange({
      status: status || undefined,
      priority: newPriority || undefined
    });
  }

  return (
    <section className="task-filter">
      <h2>Filter Tasks</h2>

      <label htmlFor="status-filter">Status: </label>
      {/* Controlled select: its value comes from state and changes through onChange. */}
      <select
        id="status-filter"
        value={status}
        onChange={handleStatusChange}
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <label htmlFor="priority-filter">Priority: </label>
      <select
        id="priority-filter"
        value={priority}
        onChange={handlePriorityChange}
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </section>
  );
}