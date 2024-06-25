import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task));
  };

  const handleEdit = () => {
    if (isEditing && newTask.trim()) {
      dispatch(editTask(task, newTask));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span>{task}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;
