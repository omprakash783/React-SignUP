import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './signup.css'

function SignUpForm({userType}){

   let history = useNavigate()
   const handleSubmit = (values) =>{
      console.log(values)
      localStorage.setItem('firstname',values.firstname)
      localStorage.setItem('lastname',values.lastname)
      localStorage.setItem('username',values.username)
      localStorage.setItem('userType',userType)
      history('/profile')
    }  
    return(
        <div className="register-form">
        <Formik
          initialValues={{
            firstname: '',
            lastname:'',
            username: '',
            email: '',
            password: '',
            acceptTerms: false,
            }}
          validationSchema={Yup.object().shape({
            firstname: Yup.string().required('First name is required'),
            lastname: Yup.string().required('Last name is required'),
            username: Yup.string()
              .required('Username is required')
              .min(6, 'Username must be at least 6 characters')
              .max(20, 'Username must not exceed 20 characters'),
            email: Yup.string()
              .required('Email is required')
              .email('Email is invalid'),
            password: Yup.string()
              .required('Password is required')
              .min(6, 'Password must be at least 6 characters')
              .max(40, 'Password must not exceed 40 characters'),
            acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
          })}
          onSubmit={(values) => handleSubmit(values)}
        >
            <Form>
        <div className="form-group">
                    <label htmlFor="firstname">First Name*</label>
                    <Field name="firstname" type="text"  className="form-control" />
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastname">Last Name*</label>
                    <Field name="lastname" type="text" className="form-control" />
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="username"> UserName* </label>
                    <Field name="username" type="text" className="form-control" />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="email"> Email* </label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="password"> Password* </label>
                    <Field name="password" type="password" className="form-control"/>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group form-check">
                    <Field
                      name="acceptTerms"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                      I have read and agree to the Terms
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn3">
                      SIGN UP
                    </button>
                  </div> 
                 
                </Form>
             
            </Formik>
          </div>
    )
    
}

export default SignUpForm