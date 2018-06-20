import React, { Component } from 'react';
import './Questions.css';
import {QuestionsContainer} from '../../components'
import Daring from '../../images/gifs/daring.gif';
import Tired from '../../images/gifs/miserable.gif';
import Determined from '../../images/gifs/determined.gif';
import Outcast from '../../images/gifs/outcast.gif';


export class Questions3 extends Component {

  render() {
    return (
      <div className="body">
        <QuestionsContainer question={'6 months in, What was my mood now?'}
                            background1={Daring}  oneTitle={'Daring'}    value1={'true'}
                            background2={Tired}      twoTitle={'Tired'}   value2={'true'}
                            background3={Determined} threeTitle={'Determined'} value3={'true'}
                            background4={Outcast}    fourTitle={'Outcast'}     value4={'true'}
            link={'/w3'}                ></QuestionsContainer>
      </div>
    );
  }
}

export default Questions3;
