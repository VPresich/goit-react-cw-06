import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from '../redux/operations';

import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { selectIsLoading, selectError } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTasks } from '../redux/operations';
// import { getTasks } from '../redux/selectors';

// export const App = () => {
//   const dispatch = useDispatch();
//   const { items, isLoading, error } = useSelector(getTasks);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <div>
//       {isLoading && <b>Loading tasks...</b>}
//       {error && <b>{error}</b>}
//       <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
//     </div>
//   );
// };
