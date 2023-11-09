import "./styles.css";

import cn from "classnames";

const tasklist = [
  { description: "do this", state: "open" },
  { description: "do that", state: "done" }
];

// Aufgabe 2
function GetTask(props) {
  let taskClassName = cn;
  ({
    taskStateDone: props.task.state == "done",
    taskStateOpen: props.task.state == "open"
  });
  return (
    <tr>
      <td>{props.task.description}</td>
      <td className={taskClassName}> {props.task.state}</td>
    </tr>
  );
}

function TaskList() {
  return (
    <div>
      <h2>Lektion 7.34 React: Bedingte CSS-Klassen Übung</h2>

      <h3>Aufgabe 1</h3>
      <table className="taskTable">
        <thead>
          <tr>
            <th>Task</th>
            <th>State</th>
          </tr>
        </thead>

        <tbody>
          <GetTask task={tasklist[0]} />
          <GetTask task={tasklist[1]} />
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
