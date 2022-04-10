import React, { Component } from 'react'
import { Col, Row, Container, Nav, Tab } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
        <Container>
            <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={3}>
                        <Nav variant='pills' className='flex-column mt-2'>
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third' >Programming</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fourth' >Framework</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fifth' >Libraries</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className='mt-3'>
                            <Tab.Pane eventKey='first'>
                                <img src='https://lowcodeartisans.com/wp-content/uploads/2021/03/Figma-Design-1024x556.png' />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <img src='https://lowcodeartisans.com/wp-content/uploads/2021/03/Figma-Design-1024x556.png' />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <img src='https://lowcodeartisans.com/wp-content/uploads/2021/03/Figma-Design-1024x556.png' />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fourth'>
                                <img src='https://lowcodeartisans.com/wp-content/uploads/2021/03/Figma-Design-1024x556.png' />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fifth'>
                                <img src='https://t.ctcdn.com.br/eTQb_z3jznYhfPGoQQDM0KURbZE=/512x288/smart/filters:format(webp)/i498952.png' />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
  }
}
