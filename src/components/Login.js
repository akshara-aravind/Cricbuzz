import React from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons'
import img from '../images/cricbuzzlogo.svg'

const Login = () => {
   const navigate = useNavigate()
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
                     // alert(JSON.stringify(values, null, 2));
                     navigate('/');
                     // console.log(values);
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
                        {errors.email && touched.email && errors.email}
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
                        {errors.password && touched.password && errors.password}
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