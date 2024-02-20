import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlise/tasksSlice';
import { filtersReducer } from './filtersSlise/filtersSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

export default store;
