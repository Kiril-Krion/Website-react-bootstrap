import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import forestImg from '../assets/pexels-kelly-l-2876511.jpg';
import SecondforestImg from '../assets/pexels-pixabay-235621.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className='d-block w-100' src={SecondforestImg} alt="forest" />
                <Carousel.Caption>
                    <h3>Forest image</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={SecondforestImg} alt="forest" />
                <Carousel.Caption>
                    <h3>White image</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={SecondforestImg} alt="forest" />
                <Carousel.Caption>
                    <h3>Forest image</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
  }
}
