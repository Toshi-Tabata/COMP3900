import React, { FC } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


import '../styles/Login.css';

interface Props {}


const Login: FC<Props> = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    function handleLogin() {

        // TODO: get token from backend, store it in redux

        history.push('/dashboard')
    }

    return (
        <div id={"loginPage"}>
            <h1> Sign In </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleLogin}>
                    Sign in
                </Button>

            </Form>
        </div>
    );
}

export default Login;

