import React from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons'
import { useQuery, useMutation } from 'react-query';
import img from '../images/cricbuzzlogo.svg'
import axios from 'axios';

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
            <Formik
               initialValues={{ email: '', password: '' }}
               validate={values => {
                  const errors = {};
                  if (!values.email) {
                     errors.email = 'Required';
                  } else if (
                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                     errors.email = 'Invalid email address';
                  }
                  if (!values.password) {
                     errors.password = 'Required';
                  }
                  return errors;
               }}
               onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                     const email = values.email;
                     const password = values.password;
                     const login = { email, password };
                     let toggle ;
                     {
                        data?.data.map((login) => {
                           if (login.email === email && login.password === password) {
                              toggle=false;
                           }
                           else if (login.email === email) {
                              toggle = true;
                           }
                        })
                        if (toggle===true) {
                           navigate('/login');
                           alert(`Enter correct password`);
                        }
                        else if(toggle===false){
                          navigate('/');
                        }
                        else{
                           mutate(login);
                           navigate('/');
                        }
                     }

                     setSubmitting(false);
                  }, 400);
               }}
            >
               {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
               }) => (
                  <form onSubmit={handleSubmit}>
                     <div className='Login'>
                        <label className='LoginMail'>Email <MailOutlined /></label>
                        <input className='LoginMail2'
                           type="email"
                           name="email"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}
                        />
                        <br />
                        <div> {errors.email && touched.email && errors.email}</div>
                     </div>
                     <br />
                     <div className='Login'>
                        <label className='LoginMail'>Password</label>
                        <input
                           className='LoginMail2'
                           type="password"
                           name="password"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}
                        />
                        <div> {errors.password && touched.password && errors.password}</div>
                     </div>
                     <br />
                     <button className='LoginSubmit' type="submit" disabled={isSubmitting}>
                        Submit
                     </button>
                  </form>
               )}
            </Formik>
         </div>
      </div>
   );
};

export default Login;