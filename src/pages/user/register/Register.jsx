import axios from "axios";
import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const Register = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = async (value) => {
    setLoader(true);
    try {
      const response = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`, value);
      if (response.status === 201) {
        toast.success('Confirm your email please!', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        navigate('/')
      }
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('email already exist!', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } else {
        toast.error(error.response.data.message, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } finally {
      setLoader(false)
    }
  }
  return (
    <Form onSubmit={handleSubmit(handleRegister)}>
      <FloatingLabel
        controlId="floatingUserName"
        label="userName"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Type your name here..."
          {...register("userName", { required: 'user name is required', minLength: { value: 6, message: "User Name must be at least 3 characters" } })}
        />
        {errors.userName && (<div className="text-danger">{errors.userName.message}</div>)}
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingEmail"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          {...register("email", { required: 'Email is required' })}
        />
        {errors.email && (<div className="text-danger">{errors.email.message}</div>)}
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="password"
        className="mb-3"
      >
        <Form.Control
          type="password"
          placeholder="Type your password here..."
          {...register("password", { required: 'Password is required', minLength: { value: 6, message: "Password must be at least 6 characters" } })}
        />
        {errors.password && (<div className="text-danger">{errors.password.message}</div>)}
      </FloatingLabel>
      <Button type="submit" variant="primary" disabled={loader}>
        {loader ? "Wait..." : "Register"}
      </Button>
    </Form>
  );
};

export default Register;
