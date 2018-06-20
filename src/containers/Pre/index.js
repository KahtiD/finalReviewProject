import React, { Component } from 'react';
import './Pre.css';
import {Link} from 'react-router-dom';




export class Pre extends Component {
  constructor(props) {
 super(props);

 this.state = {
    showCover: false,
    words: false,
 }
}

moveDiv = () => {
  this.setState({
    showCover: !this.state.showCover
  })
}

changeWords = () => {
  this.setState({
    words: !this.state.words
  })
}


  render() {
    return (
      <div className="body" onMouseLeave={this.moveDiv.bind(this)}>
        {this.state.showCover ?
          <div onClick={this.changeWords.bind(this)} className={this.state.words ? "dope": "titleTheme"}>
            {this.state.words ? <Link to="/questions:one" href="">
                                  <div className="playButton"><p>Lets Play!</p></div>
                                </Link> : null }
          </div>
          :
          <div className="cover">
          <h1 className="pageTitle">Last Time...</h1>
          <div className="middle">
            <div className="bitmoji"></div>
            <div className="cake"></div>
          </div>
          </div>
        }
        </div>
    );
  }
}

export default Pre;
