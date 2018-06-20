import React, { Component } from 'react';
import './ImageShown.css';
import {Link} from 'react-router-dom';


export class ImageShown extends Component {

  constructor() {
    super();
    this.state = {
      nextImage: false
    };
  }

  nextImagePop = () => {
    this.setState({
      nextImage: !this.state.nextImage
    })
  }

  render() {
    return (
      <div>
        <div onClick={this.props.hide} className="bodyIS">
        </div>
        <div className="imageBox">
          <div onClick={this.nextImagePop.bind(this)} className="nextButton">Next</div>
          <img disable={!this.state.nextImage} width="800px"src={!this.state.nextImage ?  this.props.image : this.props.image1}></img>
        </div>
      </div>
    );
  }
}

export default ImageShown;
