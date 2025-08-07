import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// We can reuse the same styled components from the Login page
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
} from '../Login/LoginElements';

const Register = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send registration request to the backend
      const response = await axios.post('http://localhost:5001/api/auth/register', { email, password });
      
      // Save the new user's token
      localStorage.setItem('token', response.data.token);

      // Notify App.js that the user is now logged in
      onLogin();
      
      toast.success('Registration successful!');
      
      // Redirect to the homepage after successful registration
      navigate('/');

    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed! Please try again.');
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <Container>
        <FormWrap>
          <Icon to='/'>HandyMan</Icon>
          <FormContent>
            <Form onSubmit={handleRegisterSubmit}>
              <FormH1>Create a New Account</FormH1>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput
                type='email'
                id='email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor='password'>Password (min. 6 characters)</FormLabel>
              <FormInput
                type='password'
                id='password'
                required
                minLength="6"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type='submit'>Sign Up</FormButton>
              <Text as={Link} to="/login">Already have an account? Sign In</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Register;