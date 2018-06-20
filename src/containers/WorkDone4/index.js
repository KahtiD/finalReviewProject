import React, { Component } from 'react';
import './WorkDone.css';
import {WorkQuad, ImageShown} from '../../components';
import {Link} from 'react-router-dom';

import GiveBackA from '../../images/showImage/w4/givebackA.png';
import Moment from '../../images/gifs/moment.gif';
import GiveBackB from '../../images/showImage/w4/givebackB.png';
import Barclays from '../../images/showImage/w4/barclays.png';


import Quad1 from  '../../images/quadImage2/bplogo.jpg';
import Quad2 from '../../images/quadImages1/giveBack.jpeg';


export class WorkDone4 extends Component {
  constructor() {
    super();
    this.state = {
      showImage: false,
      showImage1: false,
      showImage2: false,
    };
  }

  showImagePop = () => {
    this.setState({
      showImage: !this.state.showImage,
    })
  }
  showImagePop1 = () => {
    this.setState({
      showImage1: !this.state.showImage1,
    })
  }
  showImagePop2 = () => {
    this.setState({
      showImage2: !this.state.showImage2,
    })
  }




  render() {
    return (
      <div className="body">
          <Link to="/wrapup" href="">
            <div className="nextPage"><p>Next</p>
            </div>
          </Link>
        <h1 className="pageTitle">Work Achivements</h1>

          <div className="workTable">
            <div onClick={this.showImagePop.bind(this)}>
              <WorkQuad  quadImage={Quad1} quadTitle={'Working on the Hub'} linkImage={"/shown:one"} ></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop1.bind(this)}>
              <WorkQuad  quadImage={Quad2} quadTitle={'GiveBack'} linkImage={"/shown:one"} ></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop2.bind(this)}>
              <WorkQuad  quadImage={Quad2} quadTitle={'GiveBack'} linkImage={"/shown:one"} ></WorkQuad>
            </div>
          </div>

          {this.state.showImage &&
            <ImageShown hide={this.showImagePop.bind(this)} image={Barclays}></ImageShown>
            }
          {this.state.showImage1 &&
            <ImageShown hide={this.showImagePop1.bind(this)} image={GiveBackA} image1={Moment} image2={GiveBackB}></ImageShown>
            }

          {this.state.showImage2 &&
            <ImageShown hide={this.showImagePop2.bind(this)}  image={GiveBackB}></ImageShown>
            }

      </div>
    );
  }
}

export default WorkDone4;
