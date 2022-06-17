import { useState } from "react";
import axios from 'axios';
import IFormData from '../interfaces/IFormData';
import LoginForm from "../components/forms/LoginForm";

const Login = ({setLogin}: {setLogin: Function}) => {

  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = async (data: IFormData ): Promise<void> => {
    data.e.preventDefault();

    try {
      await axios.post('login', {
        email: data.email,
        password: data.password  
      });

      setRedirect(true);
      setLogin(true);      
    } catch(error) {
      if (error.response.status === 401) {
        setError(true);
       }
    }
  };

  return <LoginForm error={error} onRedirect={redirect} onSubmitHandler={submitHandler} />;
};

export default Login;
