import React, { Component } from 'react';
import './Home.css';
import {Bubbles} from '../../components';
import {Link} from 'react-router-dom';

export class Home extends Component {

  render(){
  return(
    <div className="mainPage">
      <div className="content">
          <h1 className="mainTitle">Welcome!</h1>
          <div className="enterButton">
            <Link to="/pre" href=""><button>Enter Presentation</button></Link>
          </div>
      </div>
      <Bubbles></Bubbles>
    </div>
  );
}
}

export default Home;
