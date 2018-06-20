import React, { Component } from 'react';
import './WrapUp.css';
import {Link} from 'react-router-dom';
import Faith from '../../images/gifs/faith.gif';


export class WrapUp extends Component {



  render() {
    return (
      <div className="body">
        <h1 className="pageTitle">Wrap Up time...</h1>
        <div className="box">
          <img src={Faith} className="gifBox"></img>
        </div>
      </div>
    );
  }
}

export default WrapUp;
