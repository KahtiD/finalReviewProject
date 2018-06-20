import React, {Component} from 'react';
import './Bubbles.css'


export class Bubbles extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return(
      <div className="bubblesContainer">
        <div className='bubble primaryColor'></div>
        <div className='bubble secondaryColor'></div>
        <div className='bubble tertiaryColor'></div>
        <div className='bubble primaryColor'></div>
        <div className='bubble secondaryColor'></div>
        <div className='bubble tertiaryColor'></div>
        <div className='bubble primaryColor'></div>
        <div className='bubble secondaryColor'></div>
        <div className='bubble tertiaryColor'></div>
        <div className='bubble primaryColor'></div>
        <div className='bubble secondaryColor'></div>
        <div className='bubble tertiaryColor'></div>
        <div className='bubble primaryColor'></div>
        <div className='bubble secondaryColor'></div>
        <div className='bubble tertiaryColor'></div>
        <div className='bubble primaryColor'></div>
      </div>
    )
  }
}

export default Bubbles;
