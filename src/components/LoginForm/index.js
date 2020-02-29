import React/*, { useState }*/ from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './style.css';
import API from '../api';


const LogInForm = props => {
  const getFieldDecorator = props.form.getFieldDecorator;
  const handleSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields((error, values) => {
      if (!error) {
        API.post('sessions',{
          'session': {
            email: values.email,
            password: values.password
          }
        })
          .then((session) => {
            props.form.resetFields();
            console.log(session);
          })
          .catch((error) => {
            console.log(error);
          })
      }
    })
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Pleae enter your email addresss' }],
        })(<Input
            prefix={<Icon type="mail" />}
            type="email"
            placeholder="Email Address"
            autoFocus="autoFocus"
          />
        )}
      </Form.Item>
      <Form.Item>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please enter your password' }],
      })(<Input
          prefix={<Icon type="lock" />}
          type="password"
          placeholder="Password"
        />
      )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: false
        })(<Checkbox>Remember me for 7 days</Checkbox>)}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Sign in
        </Button>

        <Button
          type="dashed"
          href="#"
        >
          Forgot Password
        </Button>

        <Button
          type="dashed"
          href="#"
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
const form = Form.create()(LogInForm);
export default form;
