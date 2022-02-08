import { Button, Card, Form, Input, notification } from 'antd';
import { NotificationPlacement } from 'antd/lib/notification';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from '../hooks/useTypedSelector';
import { userActions } from '../store';

import styles from './AddUserPage.module.css';
import ErrorPage from './ErrorPage';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const EditUserPage = () => {
  const dispatch = useDispatch();
  const {loading, error, data} = useSelector(state => state.users);

  const { id } = useParams();
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const matchUser = data.find( user => user.id === parseInt(id as string))

  console.log(matchUser);

  const openSuccessNotification = (placement: NotificationPlacement | undefined) => {
    notification.success({
      message: 'User Edited successfully',
      placement,
    });
  };
  
  const openErrorNotification = (placement: NotificationPlacement | undefined, msg: string) => {
    notification.error({
      message: msg,
      placement,
    });
  };

  const onFinish = async (values: any) => {
    try {
      console.log('Success:', values);

      const checkEmail = data.find( user => user.email === values.email && user.id !== values.id);

      if (!values.name || !values.email) {
        return openErrorNotification('topLeft', 'Input Field is empty!');
      }

      if (checkEmail) {
        return openErrorNotification('topLeft', 'This email already exists!');
      }

      dispatch(userActions.EditUser( values.id, values));
      openSuccessNotification('topRight'); 

      navigate("/");
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
      openErrorNotification('topLeft', 'Enter valid values in required fields');
    }
  };

  const handleCancel = () => {
    navigate("/");
  }

  if (error && data.length === 0) {
    return (
      <div className={styles.Error}>
        <ErrorPage error={error}  />
      </div>
    )
  }

  return (<div>
    <Card loading={loading} title="Form" className={styles.card}>
      {matchUser ? 
        (
          <Form form={form} initialValues={matchUser} name="dynamic_rule" onFinish={onFinish}>
        <Form.Item
          {...formItemLayout}
          name="name"
          label="Name"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your name',
            },
          ]}
        >
          <Input placeholder="Please enter your name" />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          name="email"
          label="Email"
          hasFeedback
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="Please enter your email" />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          name="username"
          label="Username"
          rules={[
            {
              required: false,
              message: 'Please input your username',
            },
          ]}
        >
          <Input placeholder="Please enter your username" />
        </Form.Item>

        <Form.Item  className={styles.formButton}>
          <Button className={styles.cancel} danger onClick={handleCancel}>
            cancel
          </Button>
          <Button className={styles.submit} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
        ) : (
          <>
          <Form form={form} name="dynamic_rule">
            <h1>Contact with id - {id} does not exist</h1>
            <Link to="/"> <Button style={{width: '100%'}} type="primary">Back to Dashboard</Button> </Link>
          </Form>
          </>
        )
      }
      

    </Card>
  </div>);
};

export default EditUserPage;
