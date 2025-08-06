import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './LoginElements';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      
      // Save the token from the response
      localStorage.setItem('token', response.data.token);

      // Notify App.js that login was successful
      onLogin();
      
      // Redirect to homepage
      navigate('/');

    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed!');
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <Container>
        <FormWrap>
          <Icon to='/'>HandyMan</Icon>
          <FormContent>
            <Form onSubmit={handleLoginSubmit}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput
                type='email'
                id='email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormInput
                type='password'
                id='password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Login;