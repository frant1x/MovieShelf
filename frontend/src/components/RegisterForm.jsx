import { useState } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import useModal from "../hooks/useModal";

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { openLogin } = useModal();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <Form onSubmit={handleSubmit} className="p-3">
            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control 
                    type="text"
                    value={email}
                    placeholder="Username"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control 
                    type="email"
                    value={email}
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control 
                    type="password" 
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </FloatingLabel>
            <Button variant="primary" type="submit" className="w-100 py-2">Sign in</Button>
            <div className="text-center mt-3">
                <span>Have an account? </span>
                <Button 
                    variant="link" 
                    onClick={openLogin} 
                    className="p-0 text-decoration-none"
                    style={{ verticalAlign: 'baseline' }}
                >
                    Sign in
                </Button>
            </div>
        </Form>
    )
}

export default RegisterForm;