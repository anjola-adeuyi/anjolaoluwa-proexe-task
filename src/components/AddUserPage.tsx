import { Button, Card, Form, Input, Checkbox, notification } from 'antd';
import { NotificationPlacement } from 'antd/lib/notification';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
const formCheckboxLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface ValuesType {
  email : string;
  name: string;
  username: string;
}

const AddUserPage = () => {
  const dispatch = useDispatch();
  const {loading, error, data} = useSelector(state => state.users);

  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [checkUser, setCheckUser] = useState(false);
  const [values, setValues] = useState<ValuesType>({email: '', name: '', username: ''});

  useEffect(() => {
    form.validateFields(['name']);
  }, [checkUser, form]);

  const onCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setCheckUser(e.target.checked);
  };

  const openSuccessNotification = (placement: NotificationPlacement | undefined) => {
    notification.success({
      message: 'User added successfully',
      placement,
    });
  };
  
  const openErrorNotification = (placement: NotificationPlacement | undefined, msg: string) => {
    notification.error({
      message: msg,
      placement,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent ) => {
    e.preventDefault();

    try {
      const checkValues = await form.validateFields();
      setValues(checkValues);
      console.log('Success:', values);

      const checkEmail = data.find( user => user.email === values.email);

      if (!values.name || !values.email) {
        return openErrorNotification('topLeft', 'Input Field is empty!');
      }

      if (checkEmail) {
        return openErrorNotification('topLeft', 'This email already exists!');
      }

      dispatch(userActions.AddUser(values));
      openSuccessNotification('topRight'); 

      navigate("/");
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
      openErrorNotification('topLeft', 'Enter valid values in required fields');
    }
  }

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

      <Form form={form} name="dynamic_rule">
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
              required: checkUser,
              message: 'Please input your username',
            },
          ]}
        >
          <Input placeholder="Please enter your username" />
        </Form.Item>

        <Form.Item {...formCheckboxLayout}>
          <Checkbox checked={checkUser} onChange={onCheckboxChange}>
            Require Username?
          </Checkbox>
        </Form.Item>

        <Form.Item  className={styles.formButton}>
          <Button className={styles.cancel} danger onClick={handleCancel}>
            cancel
          </Button>
          <Button className={styles.submit} type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>

    </Card>
  </div>);
};

export default AddUserPage;
