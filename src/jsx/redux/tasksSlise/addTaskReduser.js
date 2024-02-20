import { nanoid } from '@reduxjs/toolkit';

export const addTaskReducer = (state, action) => {
  state.push(action.payload);
};

export const prepareAddTaskPayload = text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
};
