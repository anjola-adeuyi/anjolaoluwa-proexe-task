import { Button, Card, Form, Input } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React, { useEffect, useState } from 'react';

import styles from './AddUserPage.module.css';

const formItemLayout = {
  labelCol: {
    // span: 4,
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    // span: 8,
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};

const AddUserPage = () => {
  const [form] = Form.useForm();
  const [checkUser, setCheckUser] = useState(false);
  
  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkUser, form]);

  const onCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setCheckUser(e.target.checked);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (<div>
    <Card title="Form" className={styles.card}>

      <Form form={form} name="dynamic_rule">
        <Form.Item
          {...formItemLayout}
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input your name',
            },
          ]}
        >
          <Input placeholder="Please input your name" />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input your email address',
            },
          ]}
        >
          <Input placeholder="Please input your email address" />
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
          <Input placeholder="Please input your username" />
        </Form.Item>

        <Form.Item {...formTailLayout}>
          <Checkbox checked={checkUser} onChange={onCheckboxChange}>
            Username is required
          </Checkbox>
        </Form.Item>

        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={onCheck}>
            Submit
          </Button>
        </Form.Item>
      </Form>

    </Card>
  </div>);
};

export default AddUserPage;
