export const toggleCompletedReducer = (state, action) => {
  const task = state.find(task => task.id === action.payload);
  if (task) {
    task.completed = !task.completed;
  }
};
