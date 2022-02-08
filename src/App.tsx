import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Dashboard from './components/Dashboard';
import { useSelector } from './hooks/useTypedSelector';
import { userActions } from './store';
import styles from "./App.module.css";
import ErrorPage from './components/ErrorPage';
import { Link, Route, Routes } from 'react-router-dom';
import AddUserPage from './components/AddUserPage';
import NotFound from './components/NotFound';
import EditUserPage from './components/EditUserPage';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUsers());
  }, [dispatch]);

  const { loading, error, data } = useSelector(state => state.users ); 

  if (error && data.length === 0) {
    return (
      <div className={styles.Error}>
        <ErrorPage error={error}  />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <Link to='/' className={styles.link}> Dashboard </Link></h2>
      <Routes>
        <Route path="/" element={<Dashboard loading={loading} user={data} />} />
        <Route path="/add" element={<AddUserPage />} />
        <Route path="/edit/:id" element={<EditUserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
