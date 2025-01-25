import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister=(value)=>{
console.log(value);

  }
  return (
    <Form onSubmit={handleSubmit(handleRegister)}>
      <FloatingLabel
        controlId="floatingInput"
        label="userName"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Type your name here..."
          {...register("userName",{required:'user name is required'})}
        />
        {errors.userName &&(<div className="text-danger">{errors.userName.message}</div>)}
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          {...register("email",{required:'Email is required'})}
        />
        {errors.email &&(<div className="text-danger">{errors.email.message}</div>)}
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="password"
        className="mb-3"
      >
        <Form.Control
          type="password"
          placeholder="Type your password here..."
          {...register("password",{required:'Password is required'})}
        />
        {errors.password &&(<div className="text-danger">{errors.password.message}</div>)}

      </FloatingLabel>
      <Button type="submit" variant="primary">
        Register
      </Button>
    </Form>
  );
};

export default Register;
