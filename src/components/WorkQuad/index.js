import React, {Component} from 'react';
import './WorkQuad.css'
import {Link} from 'react-router-dom';

export class WorkQuad extends Component {


  render() {
    return(
      <div className="sizing">
          <div className="quadCover">
            <h1 className="quadTitle">{this.props.quadTitle}</h1>
          </div>
          <div className="quadContainer" style={{backgroundImage: `url(${this.props.quadImage})`,
                                                backgroundSize: '100% 100%'}}>
          </div>
      </div>
    )
  }
}

export default WorkQuad;
