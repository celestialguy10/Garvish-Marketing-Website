import React, { useState } from "react";
import "./Tracker.css";

const tasks = [
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" },
  { id: 3, name: "Task 3" },
  { id: 4, name: "Task 4" },
];

const Tracker = () => {
  const [completedTasks, setCompletedTasks] = useState(new Set());

  const handleCheckboxChange = (taskId) => {
    setCompletedTasks((prev) => {
      const updated = new Set(prev);
      if (updated.has(taskId)) {
        updated.delete(taskId);
      } else {
        updated.add(taskId);
      }
      return updated;
    });
  };

  const percentageComplete = (completedTasks.size / tasks.length) * 100;

  return (
    <div className="tracker-container">
      <div className="circle">
        <div
          className="circle-inner"
          style={{
            background: `conic-gradient(#4caf50 ${percentageComplete}%, #ccc 0%)`,
          }}
        />
        <span className="circle-text">{percentageComplete.toFixed(0)}%</span>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <input
              type="checkbox"
              id={`task-${task.id}`}
              checked={completedTasks.has(task.id)}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <label htmlFor={`task-${task.id}`}>{task.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracker;
