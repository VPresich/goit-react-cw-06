export const TASKS_SLICE = 'tasks';
export const FILTERS_SLISE = 'filters';

export const statusFilters = Object.freeze({
  all: 'all',
  active: 'active',
  completed: 'completed',
});

export const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];
