import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TaskList from "./TaskList";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TaskList />
  </StrictMode>
);
