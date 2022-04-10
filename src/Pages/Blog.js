import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import Media from 'react-bootstrap/Media';
import CarouselBox from '../Components/CarouselBox';

export default class Blog extends Component {
  render() {
    return (
      <Container>
          <Row>
              <Col md="9">
                <Media className='m-5'>
                    <img width={150} height={150} className="mr-3" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__480.png" />
                    <Media.Body>
                        <h5>Blog post</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, iure? Illum laboriosam veritatis rem consectetur, eum reiciendis harum qui rerum impedit tenetur id voluptatibus cupiditate accusamus ullam quo similique omnis.''
                        </p>
                    </Media.Body>
                </Media>
                <Media className='m-5'>
                    <img width={150} height={150} className="mr-3" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__480.png" />
                    <Media.Body>
                        <h5>Blog post</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, iure? Illum laboriosam veritatis rem consectetur, eum reiciendis harum qui rerum impedit tenetur id voluptatibus cupiditate accusamus ullam quo similique omnis.''
                        </p>
                    </Media.Body>
                </Media>
                <Media className='m-5'>
                    <img width={150} height={150} className="mr-3" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__480.png" />
                    <Media.Body>
                        <h5>Blog post</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, iure? Illum laboriosam veritatis rem consectetur, eum reiciendis harum qui rerum impedit tenetur id voluptatibus cupiditate accusamus ullam quo similique omnis.''
                        </p>
                    </Media.Body>
                </Media>
                <Media className='m-5'>
                    <img width={150} height={150} className="mr-3" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__480.png" />
                    <Media.Body>
                        <h5>Blog post</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, iure? Illum laboriosam veritatis rem consectetur, eum reiciendis harum qui rerum impedit tenetur id voluptatibus cupiditate accusamus ullam quo similique omnis.''
                        </p>
                    </Media.Body>
                </Media>
              </Col>
              <Col md="3">
                <h5 className='text-center mt-5'>Category</h5>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>HTML/CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>Java</ListGroup.Item>
                        <ListGroup.Item>Python</ListGroup.Item>
                        <ListGroup.Item>Flask</ListGroup.Item>
                    </ListGroup>
                </Card>
              </Col>
          </Row>
      </Container>  
    );
  }
}
