import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
        <Container style={{ width: '500px' }}>
            <h1 className='text-center'>Contact us</h1>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email'></Form.Control>
                    <Form.Text>
                        We'll never share your email with anyone else
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows='3'></Form.Control>
                </Form.Group>

                <Form.Group controlId='formBasicCheckbox'>
                    <Form.Check type="checkbox" label="check me out"></Form.Check>
                </Form.Group>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        </Container>
    )
  }
}
