export const deleteTaskReducer = (state, action) => {
  const index = state.findIndex(task => task.id === action.payload);
  state.splice(index, 1);
};
