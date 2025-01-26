import axios from "axios";
import { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const LogIn = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogIn = async (value) => {
    setLoader(true);
    try {
      const response = await axios.post('https://ecommerce-node4.onrender.com/auth/signin', value)
      if (response.status === 200) {
        navigate('/')
      }
    } catch(error) {
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
    } finally {
      setLoader(false);
    }
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
      <Button type="submit" variant="primary" disable={loader}>
        {loader ? "Wait..." : "Log In"}
      </Button>
    </Form>
  );
};

export default LogIn;
