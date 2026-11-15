# Task Manager (Lab 9.3)

This is a small React and TypeScript app that shows a list of tasks. You can filter the tasks, change their status, and delete them. The main goal of this lab was to practice showing lists in React using `.map()`, `key` props, filtering, and conditional rendering.

## What It Does

- Shows a list of tasks with a title, description, status, priority, and due date
- Filters tasks by status, priority, or both
- Lets you change a task's status with a dropdown
- Lets you delete a task
- Shows "No tasks to display." when the list is empty
- Shows a message when a task is completed and a warning when a task is high priority

## Project Structure

```text
src/
  App.tsx
  main.tsx
  types/
    index.ts
  components/
    TaskFilter/
      TaskFilter.tsx
    TaskList/
      TaskList.tsx
    TaskItem/
      TaskItem.tsx
```

## Components

- `App.tsx`: keeps the task list and the filters in state. It also has the functions that change status and delete tasks, and it creates the filtered list.
- `TaskFilter.tsx`: has the two filter dropdowns and tells `App` which filters were picked.
- `TaskList.tsx`: loops through the tasks and shows a `TaskItem` for each one.
- `TaskItem.tsx`: shows one task, with the status dropdown and delete button.
- `types/index.ts`: has the TypeScript types for tasks and props.

## How It Works

The state lives in `App`. `App` passes data down to the other components with props. When the user does something, like deleting a task, the child component calls a function that `App` gave it. `App` updates its state and React re-renders the page.

For example, when I click Delete, `TaskItem` calls `onDelete(task.id)`. That is really `handleDelete` in `App`, which removes the task from state.

## What I Practiced

- `useState` to store the tasks and filters
- Props and callback functions to send data down and send actions back up
- `.map()` in `TaskList` to turn each task into a `TaskItem`
- `key` props using `task.id` so React can keep track of each item
- `.filter()` to show only tasks that match the selected filters, and to remove a deleted task
- Updating state without changing the original array, using `.map()` and the spread operator for a status change
- Conditional rendering with a ternary for the empty list message and `&&` for the completed and high priority messages
- Controlled dropdowns where the value comes from state or props
- TypeScript types and interfaces for tasks, statuses, and props

## How to Run

```bash
npm install
npm run dev
```

Then open the link shown in the terminal.
