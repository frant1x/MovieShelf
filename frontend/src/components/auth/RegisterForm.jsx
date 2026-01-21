import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import useModal from "../../hooks/useModal";

const RegisterForm = () => {
  const { register } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { openLogin, closeForm } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register({
      username: username,
      email: email,
      password: password,
    });
    if (result.success) {
      closeForm();
    } else {
      console.error("Registration error:", result.error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <FloatingLabel controlId="username" label="Username" className="mb-3">
        <Form.Control
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="email" label="Email address" className="mb-3">
        <Form.Control
          type="email"
          value={email}
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="password" label="Password" className="mb-3">
        <Form.Control
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FloatingLabel>
      <Button variant="primary" type="submit" className="w-100 py-2">
        Sign in
      </Button>
      <div className="text-center mt-3">
        <span>Have an account? </span>
        <Button
          variant="link"
          onClick={openLogin}
          className="p-0 text-decoration-none"
          style={{ verticalAlign: "baseline" }}
        >
          Sign in
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
