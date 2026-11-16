Task Manager (Lab 9.3)

A React and TypeScript task manager built with Vite. It shows a list of tasks that can be filtered by status and priority, updated with a status dropdown, and deleted. The lab focuses on rendering lists with .map(), unique key props, filtering, and conditional rendering.

How It Works

State lives in App. Data flows down through props, and user actions flow back up through callback functions. TaskFilter reports the selected filters to App, App passes the filtered tasks and its handler functions to TaskList, and TaskList passes them on to each TaskItem. TaskItem never changes a task directly. It calls a function that App provided, App updates its state, and React re-renders.

Files
main.tsx

The entry point. It finds the root element in index.html and renders <App /> inside StrictMode, which adds extra development checks. The ! after getElementById is a TypeScript non-null assertion that tells TypeScript the element exists.

types/index.ts

Holds all the TypeScript types. TaskStatus is a union type that only allows pending, in-progress, or completed. The Task interface describes a task, and TaskListProps, TaskItemProps, and TaskFilterProps describe the props each component receives, including the callback function types. In TaskFilterProps the filter properties are optional, so either filter can be used on its own.

App.tsx

The main component, which owns the data and the functions that change it. useState stores the tasks and the filters, and React re-renders when either changes. handleStatusChange uses .map() to replace the matching task with a copy that has the new status and keeps every other task as is, so state is never changed directly. handleDelete uses .filter() to keep every task except the one with the matching ID. filteredTasks also uses .filter() to build a list that matches both selected filters without changing the original tasks. A filter that is not selected is undefined, so it does not exclude anything.

components/TaskFilter/TaskFilter.tsx

Shows the status and priority dropdowns and reports the choices to App through onFilterChange. It destructures its props in the function signature, and the TaskFilterProps annotation types the whole props object. Each dropdown is a controlled component whose value comes from state, and an empty string means "All". Each handler sends both filters to App, because setFilters replaces the whole filter object and sending only one would erase the other. The expression newStatus || undefined turns an empty string into undefined, which App treats as no filter.

components/TaskList/TaskList.tsx

Receives the filtered tasks and decides what to show, with no state of its own. A ternary checks whether the list is empty and shows "No tasks to display." if so, which covers both an empty list and filters that match nothing. Otherwise .map() turns each task into a TaskItem. Each item gets key={task.id} so React can track items when the list changes. The ID is unique and does not change, unlike an array index, which shifts after a delete or filter. The two callbacks are passed straight through to each TaskItem.

components/TaskItem/TaskItem.tsx

Shows one task and reports user actions back to App. The status dropdown is a controlled component whose value is task.status, and changing it calls onStatusChange with the task ID and the new status. The event is typed as React.ChangeEvent<HTMLSelectElement>, and as TaskStatus tells TypeScript the selected value is a valid status. The Delete button uses an arrow function so onDelete runs on click and not during render. Conditional rendering with && shows "Task completed!" only for completed tasks and "High priority task" only for high priority tasks. The card's class name is built from the status and priority so the CSS can style each one, and each label and dropdown pair gets a unique id based on the task ID.

index.css

Global styles: the base font, text and background colors, and box-sizing: border-box for predictable sizing. Buttons and dropdowns use the page font.

App.css

Layout and component styles. It centers the app and styles the filter box, the task list, and the task cards. The status classes change the card's left border color, and the priority classes change its top border color. Cards lift slightly on hover, and the delete button has hover and pressed states. Focus outlines show keyboard focus on the dropdowns and the button. A media query at 600px stacks the filter labels above full-width dropdowns on small screens, and a reduced-motion rule turns off animations for people who have that setting turned on.

Running the Project

Run npm install to install the dependencies and npm run dev to start the app, then open the link shown in the terminal. Run npm run build to check for TypeScript errors.