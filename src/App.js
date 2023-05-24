import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div>
      <h1>Приложение Todo</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Введите задачу"
      />
      <button onClick={handleAddTask}>Добавить задачу</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;