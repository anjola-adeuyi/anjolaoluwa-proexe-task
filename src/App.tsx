import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Dashboard from './components/Dashboard';
import { useSelector } from './hooks/useTypedSelector';
import { userActions } from './store';
import styles from "./App.module.css";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUsers());
  }, [dispatch]);

  const { loading, error, data } = useSelector(state => state.users ); 

  return (
    <div className={styles.container}>
      <Dashboard loading={loading} user={data} />
    </div>
  );
}

export default App;
