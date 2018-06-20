import React, { Component } from 'react';
import {WorkQuad, ImageShown} from '../../components';
import {Link} from 'react-router-dom';

import PCatalogue from '../../images/showImage/w2/serviceDesign.png';
import Nexcel1 from '../../images/showImage/w2/nexcel1.png';
import Nexcel2 from '../../images/showImage/w2/nexcel2.png';
import Diageo from '../../images/showImage/w2/diageo.png';
import Giveback1 from '../../images/showImage/w2/giveBackwinter.png'
import Social from '../../images/showImage/social.png'
import OldCM from '../../images/showImage/originalCM.jpg'
import NewCM from '../../images/showImage/newCM.jpg'
import OldMK from '../../images/showImage/oldMK.png'
import NewMK from '../../images/showImage/newMK.png'

import Quad1 from '../../images/quadImages1/ServiceDesign.png';
import Quad2 from '../../images/quadImages1/ux.jpg';
import Quad3 from '../../images/quadImages1/coding.jpg';
import Quad4 from '../../images/quadImages1/giveBack.jpeg';


export class WorkDone2 extends Component {
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
          <Link to="/q3" href="">
            <div className="nextPage"><p>Next</p>
            </div>
          </Link>
        <h1 className="pageTitle">Work Achivements</h1>

          <div className="workTable">
            <div onClick={this.showImagePop.bind(this)}>
              <WorkQuad  quadImage={Quad1} quadTitle={'Service Design'} linkImage={"/shown:one"} ></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop1.bind(this)}>
              <WorkQuad  quadImage={Quad2} quadTitle={'UX: Nexcel'} linkImage={"/shown:one"} ></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop2.bind(this)}>
              <WorkQuad  quadImage={Quad3} quadTitle={'Web Development'} linkImage={"/shown:one"}></WorkQuad>
            </div>
          </div>
          <div className="workTable">
            <div onClick={this.showImagePop3.bind(this)}>
              <WorkQuad  quadImage={Quad4} quadTitle={'GiveBack'} linkImage={"/shown:one"}></WorkQuad>
            </div>
          </div>

          {this.state.showImage &&
            <ImageShown hide={this.showImagePop.bind(this)} image={PCatalogue}></ImageShown>
            }
          {this.state.showImage1 &&
            <ImageShown hide={this.showImagePop1.bind(this)} image={Nexcel1} image1={Nexcel2}></ImageShown>
            }
          {this.state.showImage2 &&
            <ImageShown hide={this.showImagePop2.bind(this)} image={Diageo}></ImageShown>
            }
          {this.state.showImage3 &&
            <ImageShown hide={this.showImagePop3.bind(this)} image={Giveback1}></ImageShown>
            }

      </div>
    );
  }
}

export default WorkDone2;
