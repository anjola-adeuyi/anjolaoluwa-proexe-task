import { Button, Space } from "antd";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { Link } from "react-router-dom";
import { Address } from "../models/userModel"

export const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
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
    sorter: {
      compare: (a: { username: any; }, b: { username: any; }) => a.username - b.username
    },
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
    render: (text: any, record: { id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
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
    render: () => (
      <Space size="middle">
        <Button type="primary" danger style={{ borderRadius: '6px' }}>delete</Button>
      </Space>
    ),
  },
];

export const data = [
    {
      key: '1',
      id: '1',
      name: 'John Brown',
      username: 'John004',
      email: 'John@brown.com',
      city: 'NYC',
    },
];
