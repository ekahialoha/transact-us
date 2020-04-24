import React/*, { useState }*/ from 'react';
import './style.css';
import Api from '../Api';

const LogInForm = props => {
  const getFieldDecorator = props.form.getFieldDecorator;

  if (localStorage.getItem('session_key') !== null) {
    props.history.push('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields((error, values) => {
      if (!error) {
        Api('sessions', 'POST', {
          'session': {
            email: values.email,
            password: values.password
          }
        })
          .then(result => result.data.data)
          .then(session => {
            props.form.resetFields();
            props.updateUser(session.user)
            localStorage.setItem('session_key', session.token);
            props.history.push('/');
          })
          .catch(error => console.log(error));
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
            size="large"
          />
        )}
      </Form.Item>
      <Form.Item>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please enter your password' }],
      })(<Input.Password
          prefix={<Icon type="lock" />}
          placeholder="Password"
          size="large"
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
          size="large"
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
