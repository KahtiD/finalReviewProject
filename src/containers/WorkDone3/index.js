import React, { Component } from 'react';
import './WorkDone.css';
import {WorkQuad, ImageShown} from '../../components';
import {Link} from 'react-router-dom';

import Hub from '../../images/showImage/w3/hub.png';
import Box from '../../images/showImage/w3/boxRevamp.png';
import Hackathon from '../../images/showImage/w3/disneat.png';
import Giveback2 from '../../images/showImage/w3/giveback2.png';
import Calendar from '../../images/showImage/socialCalendar.jpg'
import Social from '../../images/showImage/social.png'
import OldCM from '../../images/showImage/originalCM.jpg'
import NewCM from '../../images/showImage/newCM.jpg'
import OldMK from '../../images/showImage/oldMK.png'
import NewMK from '../../images/showImage/newMK.png'

import Quad1 from '../../images/quadImage2/bplogo.jpg';
import Quad2 from '../../images/quadImage2/Boxlogo.png';
import Quad3 from '../../images/quadImage2/iXLogo.png';
import Quad4 from '../../images/quadImages1/giveBack.jpeg';


export class WorkDone3 extends Component {
  constructor() {
    super();
    this.state = {
      showImage: false,
      showImage1: false,
      showImage2: false,
      showImage3: false,
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
  showImagePop3 = () => {
    this.setState({
      showImage3: !this.state.showImage3,
    })
  }




  render() {
    return (
      <div className="body">
          <Link to="/q4" href="">
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
              <WorkQuad  quadImage={Quad2} quadTitle={'Box Revamp'} linkImage={"/shown:one"} ></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop2.bind(this)}>
              <WorkQuad  quadImage={Quad3} quadTitle={'iX Hackathon'} linkImage={"/shown:one"}></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop3.bind(this)}>
              <WorkQuad  quadImage={Quad4} quadTitle={'GiveBack'} linkImage={"/shown:one"}></WorkQuad>
            </div>
          </div>



          {this.state.showImage &&
            <ImageShown hide={this.showImagePop.bind(this)} image={Hub}></ImageShown>
            }
          {this.state.showImage1 &&
            <ImageShown hide={this.showImagePop1.bind(this)} image={Box}></ImageShown>
            }
          {this.state.showImage2 &&
            <ImageShown hide={this.showImagePop2.bind(this)} image={Hackathon}></ImageShown>
            }
          {this.state.showImage3 &&
            <ImageShown hide={this.showImagePop3.bind(this)} image={Giveback2}></ImageShown>
            }

      </div>
    );
  }
}

export default WorkDone3;
