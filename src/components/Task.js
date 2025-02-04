import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  // Check if categories is undefined or null before mapping
  if (!categories) {
    return null; // or return a loading state
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText && taskCategory) {
      onTaskFormSubmit({ text: taskText, category: taskCategory });
      setTaskText("");
      setTaskCategory("");
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="New task details"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <select
        name="category"
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;