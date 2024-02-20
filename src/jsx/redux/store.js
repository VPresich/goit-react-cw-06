import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer, filtersReducer } from './reducers';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

export default store;
