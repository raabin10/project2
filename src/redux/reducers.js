const initialState = {
    tasks: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task !== action.payload),
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task === action.payload.oldTask ? action.payload.newTask : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  