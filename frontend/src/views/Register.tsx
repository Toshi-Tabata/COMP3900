import React, { FC } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import '../styles/Register.css';


interface Props {}


const Register: FC<Props> = (props) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const history = useHistory();
    function handleRegister() {
        // TODO: check if it was successful from backend
        //  check if passwords matched

        history.push('/login');
    }
    return(
        <div id="registerPage">
            <h1> Register Account </h1>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="name" type="text" value={username} placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="password" type="password" value={confirmPassword} placeholder="Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>

                <div id={"registerButtons"}>
                    <Button variant="primary" type="submit" onClick={handleRegister}>
                        Register
                    </Button>
                    <Link to={"login"} >Already have an account? <br/> Login Now</Link>

                </div>
            </Form>


        </div>

    );
}

export default Register