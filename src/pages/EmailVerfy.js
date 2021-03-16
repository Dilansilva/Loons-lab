import React,{useState,useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,
        Col, 
        Jumbotron,
        Button} from 'react-bootstrap';
import '../css/SignIn.css';


export default function EmailVerfy() {
    const [code,setCode] = useState();//state for email verification code
    const [wrongcode,setWrongcode] = useState();//state for wrong code

    const [error,setError] = useState();//state for error

    const [email,setEmail] = useState();//state for email

    useEffect(() => {
        fetch('http://localhost:4000/emailverify',{
            method : 'POST',
            mode : 'cors',
            headers: {
                   Accept : 'application/json',
               'Content-Type' : 'application/json',
               'Access-Control-Allow-Origin' : 'http://localhost:4000/emailverify'
             }, 
             body: JSON.stringify({
               email : email
           }),
        })
    },[])

    const submit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/emailverify',{
            method : 'POST',
            mode : 'cors',
            headers: {
                   Accept : 'application/json',
               'Content-Type' : 'application/json',
               'Access-Control-Allow-Origin' : 'http://localhost:4000/emailverify'
             }, 
             body: JSON.stringify({
               code : code
           }),
        })
        .then(response => response.json())
        .then((data) => {
               if(data.message === 'verify code'){
                   //ROUTE HAS TO DONE HERE
               } else if(data.message === 'wrong code'){
                   setWrongcode('Wrong code');
               }
        })
        .catch((error) => {
            setError('Error');
        })
    }
    return (
        <div className="textAlign textSpace">
           
            <Col className = "alignItems">
                <Jumbotron style={{width:'500px'}}>
                    <Form>

                        <Form.Row>
                            <Col>
                                <Form.Label>Check your email</Form.Label>
                                    <Form.Control 
                                        placeholder="Enter Email Verification Code"
                                        onChange={(e) => {setCode(e.target.value)}} 
                                    />
                                    <small>{wrongcode}</small>
                                    <small>{error}</small>
                            </Col>
                        </Form.Row>

                    </Form><br></br>
                        <Button
                            onClick={submit}
                        >Click</Button>
                </Jumbotron>
            </Col>
           
        </div>
    )
}
