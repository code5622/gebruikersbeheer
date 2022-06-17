import { SyntheticEvent, useState } from "react";
import axios from 'axios';
import RegisterForm from "../components/forms/RegisterForm";

type FormData = {
  e: SyntheticEvent,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  passwordConfirm: string
};

const Register = () => {

  const [redirect, setRedirect] = useState(false);

  const submitHandler = async (data: FormData) => {
    data.e.preventDefault();

    const registeredUser = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      password_confirm: data.passwordConfirm,
    };

    await axios.post("register", registeredUser);

    setRedirect(true);
  };


  return <RegisterForm onRedirect={redirect} onSubmitHandler={submitHandler} />;
};

export default Register;
