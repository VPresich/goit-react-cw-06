import { createSlice } from '@reduxjs/toolkit';
import { TASKS_SLICE, tasksInitialState } from '../constants';
import { addTaskReducer, prepareAddTaskPayload } from './addTaskReduser';
import { deleteTaskReducer } from './deleteTaskReducer';
import { toggleCompletedReducer } from './toggleCompetedReducer';

const tasksSlice = createSlice({
  name: TASKS_SLICE,
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer: addTaskReducer,
      prepare: prepareAddTaskPayload,
    },
    deleteTask: deleteTaskReducer,
    toggleCompleted: toggleCompletedReducer,
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { TASKS_SLICE, tasksInitialState } from './constants';

// const tasksSlice = createSlice({
//   name: TASKS_SLICE,
//   initialState: tasksInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },

//     deleteTask(state, action) {
//       const index = state.findIndex(task => task.id === action.payload);
//       state.splice(index, 1);
//     },

//     toggleCompleted(state, action) {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//           break;
//         }
//       }
//     },
//   },
// });

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// export const tasksReducer = tasksSlice.reducer;
