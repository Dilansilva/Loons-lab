import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,
         Form,
        Jumbotron,
        Container,
        Row,
        Col,
        Image,
        Card } from 'react-bootstrap';

import '../css/SignIn.css';
import image from '../images/weather_2x.jpg';//import image

export default function SignUp() {

    const [name,setName] = useState('show');//state for button name
    const [type,setType] = useState('password');//state for input type

    const [emailUse,setEmailuse] = useState();//state for email use
    const [error,setError] = useState();//state for error

    const [email,setEmail] = useState();//state for email
    const [password,setPassword] = useState();//state for password

    const toggleButton = (e) => {
        e.preventDefault();
        if(name === 'show'){
            setName('hide');
            setType('text');
        } else{
            setName('show');
            setType('password');
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/signup',{
            method : 'POST',
            mode : 'cors',
            headers: {
                   Accept : 'application/json',
               'Content-Type' : 'application/json',
               'Access-Control-Allow-Origin' : 'http://localhost:4000/login'
             }, 
             body: JSON.stringify({
               email : email,
               password : password
           }),
        })
        .then(response => response.json())
        .then((data) => {
               if(data.message === 'successfully added'){
                   //ROUTE HAS TO DONE HERE
               } else if(data.message === 'email is in use'){
                   setEmailuse('Email in use..use another one');
               } 
        })
        .catch((error) => {
            setError('Error');
        })
    }

    return (
        <div>
        <Jumbotron className="backgroundColor" fluid>
        <Container>
        <h1 className="textAlign"><b>Sign-Up</b></h1><br></br>
            <Row>
                <Col sm={7}>
                    <Image
                        src={image}
                        className="imageBackGround"
                    />
                </Col>

                <Col sm={5}>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter Email"  
                                        onChange={(e) => {setEmail(e.target.value)}}
                                    />
                                    <small>{emailUse}</small>
                                </Form.Group>
                          
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type={type} 
                                        placeholder="Enter Password"
                                        onChange={(e) => {setPassword(e.target.value)}}
                                    />
                                    <small>{error}</small>
                                        <button
                                            class="button button5"
                                            onClick={toggleButton}
                                        >{name}</button>
                                </Form.Group>

                            <div class="textAlign">
                                <Button 
                                    size="sm"
                                    variant="primary" 
                                    type="submit"
                                    onClick={submitHandler}
                                    block>
                                 Create Account  
                                </Button>
                            </div>

                          </Form>
                                <br></br>
                            <div className="textAlign"> 
                                <a href="/signup" className="textSpace">Have an account? Log-In</a>
                            </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
        </div>
    )
}
