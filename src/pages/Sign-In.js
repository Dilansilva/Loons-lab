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
import image from '../images/pharmacy.jpg';//import image

const SignIn = () => {

    const[email,setEmail] = useState();//state for email
    const[password,setPassword] = useState();//state for password
    const[error,setError] = useState();//state for error message

    return (
        <Jumbotron className="backgroundColor" fluid>
        <Container>
            <Row>
                
                 <Col sm={3}>
                    <h3><b>Search Weather forcast here</b></h3>
                        
                </Col>
         
                <Col sm={4}>
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
                                 Submit  
                                </Button>
                            </div>

                          </Form>

                            <div className="textAlign"> 
                                <a href="/emailenter" className="textSpace">Forget Password?</a>
                                    <br></br>
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