import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from './components/Dashboard';
import { useSelector } from './hooks/useTypedSelector';
import { userActions } from './store';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUsers());
  }, []);

  const { loading, error, data } = useSelector(state => state.users ); 

  return (
    <div>
      The User List Table 
      <Dashboard />
    </div>
  );
}

export default App;
