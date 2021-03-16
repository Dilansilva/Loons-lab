import React,{useState} from 'react';
import axios from 'axios';//import axios

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

const SignIn = () => {

    const[email,setEmail] = useState();//state for email
    const[password,setPassword] = useState();//state for password
    const[error,setError] = useState();//state for error message

    const Submit = () => {
        axios.post('http://localhost:4000/login')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
        });
    }

    return (
        <Jumbotron className="backgroundColor" fluid>
        <Container>
        <h1 className="textAlign"><b>Sign-In</b></h1><br></br>
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
                                    />
                                    
                                </Form.Group>
                          
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Enter Password"
                                    />
                                </Form.Group>

                            <div class="textAlign">
                                <Button 
                                    size="sm"
                                    variant="primary" 
                                    type="submit"
                                    block>
                                    Login  
                                </Button>
                            </div>

                          </Form>

                            <div className="textAlign"> 
                                <a href="/signup" className="textSpace">Don't Have account?</a>
                            </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
    );
}

export default SignIn