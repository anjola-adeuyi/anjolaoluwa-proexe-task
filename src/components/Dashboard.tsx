import React, { FC } from 'react';
import { Button, Card, Modal, notification, Space, Table } from 'antd';

import styles from './Dashboard.module.css';
import "./DashboardAntD.css";
import { Address, User } from '../models/userModel';
// import { columns } from '../Util/tableColumns';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../store';
import { NotificationPlacement } from 'antd/lib/notification';

interface DashboardProp {
  loading: boolean;
  user: User[];
}

const Dashboard: FC<DashboardProp> = (props) => {
  const { user, loading } = props;
  const dispatch = useDispatch();

  console.log( user ); 

  const { confirm } = Modal;

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      sorter: {
        compare: (a: { id: any; }, b: { id: any; }) => a.id - b.id
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      sorter: (a: { username: string | any[]; }, b: { username: string | any[]; }) => a.username.length - b.username.length,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'City',
      dataIndex: 'address',
      key: 'address',
      render: (address: Address) => (
        <>
          {address.city}
        </>
      ),
    },
    {
      title: 'Edit',
      key: 'id',
      render: (text: any, record: { id:  number }) => (
        <Space size="middle">
          <Link to={`/edit/${record.id}`}>
            <Button type="primary"  style={{ backgroundColor: 'rgb(255 193 6)', borderColor: 'rgb(255 193 6)', borderRadius: '6px' }}>edit</Button>
          </Link>
        </Space>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (text: any, record: { id: number ; }) => (
        <Space size="middle">
          <Button type="primary" danger style={{ borderRadius: '6px' }} onClick={() => handleDelete(record.id)}>delete</Button>
        </Space>
      ),
    },
  ];

  const openErrorNotification = (placement: NotificationPlacement | undefined, msg: string) => {
    notification.error({
      message: msg,
      placement,
    });
  };

  const handleDelete = (id: number) => {
    console.log(id);
    confirm({
      title: 'Delete',
      content: 'Are you sure you want to delete this user',
      okText: 'Delete',
      okType: 'danger',
      onOk() {
        dispatch(userActions.DeleteUser(id));
        openErrorNotification('topLeft', 'User Deleted');
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {
        console.log('Cancel');
        openErrorNotification('topLeft', 'Delete Canceled');
      },
    });
  }

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
