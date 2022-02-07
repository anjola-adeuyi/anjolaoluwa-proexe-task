import React, { FC } from 'react';
import { Button, Card, Space, Table } from 'antd';

import styles from './Dashboard.module.css';

interface DashboardProp {
  loading: boolean;
}

const Dashboard: FC<DashboardProp> = ({ loading }) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      // width: '7%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      // width: '20%',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      sorter: {
        compare: (a: { username: any; }, b: { username: any; }) => a.username - b.username,
        multiple: 3,
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      // sorter: {
      //   compare: (a: { email: any; }, b: { email: any; }) => a.email - b.email,
      //   multiple: 2,
      // },
    },
    {
      title: 'City',
      dataIndex: 'city',
      // sorter: {
      //   compare: (a: { city: any; }, b: { city: any; }) => a.city - b.city,
      //   multiple: 1,
      // },
    },
    {
      title: 'Edit',
      key: 'edit',
      render: () => (
        <Space size="middle">
          <Button type="primary"  style={{ backgroundColor: 'rgb(255 193 6)', borderColor: 'white', borderRadius: '6px' }}>edit</Button>
        </Space>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: () => (
        <Space size="middle">
          <Button type="primary" danger style={{ borderRadius: '6px' }}>delete</Button>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
  ];

  function onChange(filters: any, sorter: any, extra: any) {
    console.log('params', filters, sorter, extra);
  }

  return (<div className={styles.container}>
    <h2 className={styles.title}>Dashboard</h2>
    <Card loading={loading} title="User list" extra={
    <Button type="primary" style={{ borderRadius: '6px', width: '6rem' }} >Add new</Button>} className={styles.card}>
      <Table columns={columns} dataSource={data} pagination={false} onChange={onChange} scroll={{ x: 'max-content' }} />
    </Card>
  </div>);
};

export default Dashboard;
