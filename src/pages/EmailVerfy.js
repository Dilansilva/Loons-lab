import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,
        Col, 
        Jumbotron,
        Button} from 'react-bootstrap';
import '../css/SignIn.css';


export default function EmailVerfy() {
    return (
        <div className="textAlign textSpace">
           
            <Col className = "alignItems">
                <Jumbotron style={{width:'500px'}}>
                    <Form>

                        <Form.Row>
                            <Col>
                                <Form.Label>Check your email</Form.Label>
                                    <Form.Control placeholder="Enter Email Verification Code" />
                            </Col>
                        </Form.Row>

                    </Form><br></br>
                        <Button>Click</Button>
                </Jumbotron>
            </Col>
           
        </div>
    )
}
