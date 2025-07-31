import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
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
} from '../LoginElements';


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    onLogin(); 
    navigate('/'); 
  };

  return (
    <Container>
      <FormWrap>
        <Icon to='/'>HandyMan</Icon>
        <FormContent>
          {/* Change the form's onSubmit to our handleLogin function */}
          <Form onSubmit={handleLogin}> 
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput
              type='email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput
              type='password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormButton type='submit'>Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Login;