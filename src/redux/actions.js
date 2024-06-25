export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const deleteTask = (task) => ({
    type: 'DELETE_TASK',
    payload: task,
  });
  
  export const editTask = (oldTask, newTask) => ({
    type: 'EDIT_TASK',
    payload: { oldTask, newTask },
  });
  