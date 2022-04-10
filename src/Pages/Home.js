import React, { Component } from 'react';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

export default class Home extends Component {
  render() {
    return (
        <>
            <CarouselBox />

            <Container>
                <h2 className='text-center m-4'>Our Team</h2>
                <Container className='m-4 d-flex justify-content-evenly'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                            </Card.Text>
                            <Button variant='primary'>About team</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                            </Card.Text>
                            <Button variant='primary'>About team</Button>
                        </Card.Body>
                        <Card.Img variant='bottom' src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                            </Card.Text>
                            <Button variant='primary'>About team</Button>
                        </Card.Body>
                    </Card>
                </Container>
                    
                
            </Container>
        </>
    );
  }
}
