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

const SignIn = () => {

    const[email,setEmail] = useState();//state for email
    const[password,setPassword] = useState();//state for password
    const[error,setError] = useState();//state for error message

    const[wrongemail,setWrongemail] = useState();//state for wrong email
    const[wrongpassword,setWrongpassword] = useState();

    const Submit = (e) => {
        e.preventDefault();
         fetch('http://localhost:4000/login',{
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
                if(data.message === 'valid login'){
                    //ROUTE HAS TO DONE HERE
                } else if(data.message === 'invalid login'){
                    setWrongemail('Invalid Email!');
                } else if(data.message === 'invalid password'){
                    setWrongpassword('Invalid Password!');
                }
         })
         .catch((error) => {
             setError('Error');
         })
        
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
                                        onChange={(e) => {setEmail(e.target.value)}}
                                    />
                                    <small>{error}</small>
                                    <small>{wrongemail}</small>
                                </Form.Group>
                          
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Enter Password"
                                        onChange={(e) => {setPassword(e.target.value)}}
                                    />
                                    <small>{wrongpassword}</small>
                                </Form.Group>

                            <div className="textAlign">
                                <Button 
                                    size="sm"
                                    variant="primary" 
                                    type="submit"
                                    onClick={Submit}
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