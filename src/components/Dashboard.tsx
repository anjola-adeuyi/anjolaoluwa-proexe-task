import React, { FC } from 'react';
import { Button, Card, Table } from 'antd';

import styles from './Dashboard.module.css';
import { User } from '../models/userModel';
import { columns } from '../Util/tableColumns';
import { Link } from 'react-router-dom';

interface DashboardProp {
  loading: boolean;
  user: User[];
}

const Dashboard: FC<DashboardProp> = (props) => {
  const { user, loading } = props;

  console.log( user ); 

  function onChange(filters: any, sorter: any, extra: any) {
    console.log('params', filters, sorter, extra);
  }

  return (<div>
    <Card loading={loading} title="User list" extra={ <Link to="/add">
      <Button type="primary" style={{ borderRadius: '6px', width: '6rem' }} >  Add new </Button>
    </Link> } className={styles.card}>
      
      <Table columns={columns} dataSource={user} pagination={false} onChange={onChange} scroll={{ x: 'max-content' }} />
    </Card>
  </div>);
};

export default Dashboard;
