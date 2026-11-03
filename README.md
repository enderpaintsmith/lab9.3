# Lab 9.3: Lists, Keys, and Conditionals — Task Manager

## Project Overview

For this lab, I developed a Task Management application using React and TypeScript. The purpose of the project was to practice rendering dynamic lists, using unique keys, implementing conditional rendering, and managing component communication through props and callback functions.

The application displays a list of tasks with individual titles, descriptions, statuses, priorities, and due dates. Users can filter tasks by status and priority, update their progress, and delete tasks. The interface also provides visual feedback based on each task's properties.

## Technologies Used

The project was built using React, TypeScript, Vite, HTML, and CSS. React handles component rendering and state management, while TypeScript provides type safety through interfaces. Vite was used for development and production builds.

CSS was used to create a responsive interface with a forest-green and sage color palette, individual task cards, and visual indicators for different task statuses and priorities.

## Component Structure

I organized the application into three reusable components: `TaskList`, `TaskItem`, and `TaskFilter`.

**TaskList** receives an array of tasks and renders each task using the JavaScript `.map()` method. Each `TaskItem` receives a unique `key` based on its task ID, allowing React to identify individual elements when the list changes. The component also displays a message when there are no tasks to show.

**TaskItem** displays the information for an individual task, including its title, description, status, priority, and due date. It includes a dropdown for changing the task's status and a button for deleting the task. Conditional rendering is used to display additional messages for completed and high-priority tasks.

**TaskFilter** provides dropdown menus for filtering tasks by status and priority. It manages the selected filter values and communicates changes to the parent component through a callback function.

## State Management and Filtering

The main application uses the `useState` hook to manage the task array and selected filters. When a user changes a task's status, the application uses `.map()` to create an updated array while preserving the other tasks. Deleting a task uses `.filter()` to remove the matching task from the array.

Filtering is also handled through `.filter()`, allowing users to display tasks that match their selected status and priority. When no filter is selected, all tasks are displayed.

This helped me understand how React manages dynamic lists and how state changes cause the interface to update automatically.

## Styling and Conditional Rendering

The application uses CSS classes based on task status and priority to provide visual feedback. Different border colors distinguish pending, in-progress, and completed tasks, while additional indicators highlight high-priority items.

I also implemented hover and active states for interactive elements, along with responsive styling for smaller screens.

## Challenges and Reflection

One of the main challenges was understanding how `.map()` and `.filter()` serve different purposes when working with arrays. I practiced using `.map()` to render and update tasks, while `.filter()` was used to remove tasks and control which items appeared in the interface.

I also gained a better understanding of why React requires unique keys when rendering lists and how conditional rendering can be used to display information based on task properties.

Working with TypeScript interfaces and callback functions helped reinforce concepts from previous labs, particularly how components communicate and how state is managed in a parent component.

Overall, this lab strengthened my understanding of dynamic list rendering, event handling, state updates, and reusable component design in React.

## Running the Application

After cloning the repository, navigate into the project directory and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite.

To create a production build:

```bash
npm run build
```

## Future Improvements

Future improvements could include adding a form for creating new tasks, allowing users to sort tasks by due date, and providing controls to reorder tasks. These features would expand the application's functionality while providing additional opportunities to practice React state management and component composition.