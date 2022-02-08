import { Button, Modal, Space } from "antd";
import { Link } from "react-router-dom";

import { Address } from "../models/userModel"

const { confirm } = Modal;

export const columns = [
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
        <Button type="primary" danger style={{ borderRadius: '6px' }} onClick={() => HandleDelete(record.id)}>delete</Button>
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

const HandleDelete = (id: number) => {

  console.log(id);
  confirm({
    title: 'Delete',
    content: 'Are you sure you want to delete this user',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}