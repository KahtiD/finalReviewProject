import React, { Component } from 'react';
import './WorkDone.css';
import {WorkQuad, ImageShown} from '../../components';
import {Link} from 'react-router-dom';

import OldBox from '../../images/showImage/oldbox.jpg';
import NewBox from '../../images/showImage/newBox.jpg';
import Workshop from '../../images/showImage/workshop.png';
import RetroComms from '../../images/showImage/retrospective.png';
import Calendar from '../../images/showImage/socialCalendar.jpg'
import Social from '../../images/showImage/social.png'
import OldCM from '../../images/showImage/originalCM.jpg'
import NewCM from '../../images/showImage/newCM.jpg'
import OldMK from '../../images/showImage/oldMK.png'
import NewMK from '../../images/showImage/newMK.png'

import Quad1 from '../../images/quadImages/excel.png';
import Quad3 from '../../images/quadImages/retro.jpg';
import Quad2 from '../../images/quadImages/designThinking.jpeg';
import Quad4 from '../../images/quadImages/socialquad.jpeg';
import Quad5 from '../../images/quadImages/journer.jpg';
import Quad6 from '../../images/quadImages/powerpoint.png';

export class WorkDone extends Component {
  constructor() {
    super();
    this.state = {
      showImage: false,
      showImage1: false,
      showImage2: false,
      showImage3: false,
      showImage4: false,
      showImage5: false,
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
  showImagePop4 = () => {
    this.setState({
      showImage4: !this.state.showImage4,
    })
  }
  showImagePop5 = () => {
    this.setState({
      showImage5: !this.state.showImage5,
    })
  }



  render() {
    return (
      <div className="body">
          <Link to="/q2" href="">
            <div className="nextPage"><p>Next</p>
            </div>
          </Link>
        <h1 className="pageTitle">Work Achivements</h1>

          <div className="workTable">
            <div onClick={this.showImagePop.bind(this)}>
              <WorkQuad  quadImage={Quad1} quadTitle={'Backlog Revamp'} linkImage={"/shown:one"} ></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop1.bind(this)}>
              <WorkQuad  quadImage={Quad2} quadTitle={'Procurement Workshop'} linkImage={"/shown:one"} ></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop2.bind(this)}>
              <WorkQuad  quadImage={Quad3} quadTitle={'Retrospective'} linkImage={"/shown:one"}></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop3.bind(this)}>
              <WorkQuad  quadImage={Quad4} quadTitle={'Social'} linkImage={"/shown:one"}></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop4.bind(this)}>
              <WorkQuad  quadImage={Quad5} quadTitle={'Customer Journey Maps'} linkImage={"/shown:one"}></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop5.bind(this)}>
              <WorkQuad  quadImage={Quad6} quadTitle={'Client Deck Revamp'} linkImage={"/shown:one"}></WorkQuad>
            </div>
          </div>



          {this.state.showImage &&
            <ImageShown hide={this.showImagePop.bind(this)} image={OldBox} image1={NewBox}></ImageShown>
            }
          {this.state.showImage1 &&
            <ImageShown hide={this.showImagePop1.bind(this)} image={Workshop}></ImageShown>
            }
          {this.state.showImage2 &&
            <ImageShown hide={this.showImagePop2.bind(this)} image={RetroComms} image1={Calendar}></ImageShown>
            }
          {this.state.showImage3 &&
            <ImageShown hide={this.showImagePop3.bind(this)} image={Social}></ImageShown>
            }
          {this.state.showImage4 &&
            <ImageShown hide={this.showImagePop4.bind(this)} image={OldCM} image1={NewCM}></ImageShown>
            }
          {this.state.showImage5 &&
            <ImageShown hide={this.showImagePop5.bind(this)} image={OldMK} image1={NewMK}></ImageShown>
            }
      </div>
    );
  }
}

export default WorkDone;
