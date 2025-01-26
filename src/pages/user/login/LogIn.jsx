import axios from "axios";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogIn = async (value) => {

  }
  return (
    <Form onSubmit={handleSubmit(handleLogIn)}>
      <FloatingLabel
        controlId="floatingInput"
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
        controlId="floatingInput"
        label="password"
        className="mb-3"
      >
        <Form.Control
          type="password"
          placeholder="Type your password here..."
          {...register("password", { required: 'Password is required' })}
        />
        {errors.password && (<div className="text-danger">{errors.password.message}</div>)}
      </FloatingLabel>
      <Button type="submit" variant="primary">
        Log In
      </Button>
    </Form>
  );
};

export default LogIn;
