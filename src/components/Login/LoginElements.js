import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #f0f4f8; /* Light gray background to match portfolio */
`;

export const FormWrap = styled.div`
  width: 100%;
  max-width: 450px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  position: relative;
`;

export const Icon = styled(Link)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  gap: 1.5rem; /* Space between form elements */
`;

export const FormH1 = styled.h1`
  margin-bottom: 1rem;
  color: #333;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const FormLabel = styled.label`
  font-size: 0.9rem;
  color: #555;
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const FormButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Text = styled.span`
  text-align: center;
  color: #555;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;