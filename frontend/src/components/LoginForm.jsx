import { useState } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import useModal from "../hooks/useModal";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { openRegister } = useModal();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <Form onSubmit={handleSubmit} className="p-3">
            <FloatingLabel controlId="floatingInput" label="Email address">
                <Form.Control 
                    type="email"
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </FloatingLabel>
            <div className="text-end mt-1 mb-3">
                <a href="#forgot-password" className="text-decoration-none small">
                    Forgot your password?
                </a>
            </div>
            <Button variant="primary" type="submit" className="w-100 py-2">Sign in</Button>
            <div className="text-center mt-3">
                <span>Don't have an account? </span>
                <Button 
                    variant="link" 
                    onClick={openRegister} 
                    className="p-0 text-decoration-none"
                    style={{ verticalAlign: 'baseline' }}
                >
                    Create one
                </Button>
            </div>
        </Form>
    )
}

export default LoginForm;