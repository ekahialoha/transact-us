import React/*, { useState }*/ from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './style.css';



const LogInForm = props => {
  const getFieldDecorator = props.form.getFieldDecorator;
  const handleSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields((error, values) => {
      if (!error) {
        console.log(values);
      }
    })
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('user', {
          rules: [{ required: true, message: 'Pleae enter your username' }],
        })(<Input
            prefix={<Icon type="user" />}
            placeholder="Username"
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
          className="login-form-button"
          type="dashed"
        >
          Forgot Password
        </Button>

        <Button
          className="login-form-button"
          type="dashed"
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
const form = Form.create()(LogInForm);
export default form;
