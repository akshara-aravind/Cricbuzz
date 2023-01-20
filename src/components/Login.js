import React from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons'
import { useQuery, useMutation } from 'react-query';
import { Button, Checkbox, Form, Input } from 'antd';
import img from '../images/cricbuzzlogo.svg'
import axios from 'axios';
import '../App.css';

const onFinish = (values) => {
   console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
   console.log('Failed:', errorInfo);
};

const GetLoginDetails = () => {
   return axios.get('http://localhost:4000/Users');
}
const PostLoginDetails = (login) => {
   return axios.post('http://localhost:4000/Users', login)
}

const Login = () => {
   const navigate = useNavigate();
   const { data, isLoading, isSuccess } = useQuery('logindetails', GetLoginDetails);
   const { mutate } = useMutation(PostLoginDetails);
   if (isSuccess)
      console.log(data);
   if (isLoading)
      console.log("is Loading");
    const onFinish = (values) => {
      const email = values.email;
      const password = values.password;
      const login = { email, password };
      let toggle;
      {
        data?.data.map((login) => {
          if (login.email === email && login.password === password) {
            toggle = false;
          }
          else if (login.email === email) {
            toggle = true;
          }
        })
        if (toggle === true) {
          navigate('/login');
          alert(`Enter correct password`);
        }
        else if (toggle === false) {
          navigate('/');
        }
        else {
          mutate(login);
          navigate('/');
        }
      }
       };
   return (
      <div className='CricbuzzLoginPage'>
         <div className='LoginNav'>
            <div className='LoginLogo'>
               <Link to='/'>
                  <img src={img} alt='is Loading' />
               </Link>
            </div>
         </div>
         <div className='LoginPage'>
            <h1>Login / Sign Up </h1>
            <Form
               name="basic"
               labelCol={{
                  span: 8,
               }}
               wrapperCol={{
                  span: 16,
               }}
               style={{
                  maxWidth: 600,
               }}
               initialValues={{
                  remember: true,
               }}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
               autoComplete="off"
            >
               <Form.Item
                  name="email"
                  label="E-mail"
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
                  <Input />
               </Form.Item>
               <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                     {
                        required: true,
                        message: 'Please input your password!',
                     },
                  ]}
               >
                  <Input.Password />
               </Form.Item>

               <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                     offset: 8,
                     span: 16,
                  }}
               >
                  <Checkbox>Remember me</Checkbox>
               </Form.Item>

               <Form.Item
                  wrapperCol={{
                     offset: 8,
                     span: 16,
                  }}
               >
                  <Button type="primary" htmlType="submit">
                     Submit
                  </Button>
               </Form.Item>
            </Form>
         </div>
      </div>
   );
};

export default Login;