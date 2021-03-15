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

    const toggleButton = (e) => {
        e.preventDefault();
        if(name == 'show'){
            setName('hide');
            setType('text');
        } else{
            setName('show');
            setType('password');
        }
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
                                    />
                                    
                                </Form.Group>
                          
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type={type} 
                                        placeholder="Enter Password"
                                    />
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
                                    block>
                                 Log-In  
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
