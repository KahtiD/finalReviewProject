import React, { Component } from 'react';
import './Questions.css';
import {QuestionsContainer} from '../../components'
import Confident from '../../images/gifs/confident.gif';
import FedUp from '../../images/gifs/fedup.gif';
import CareFree from '../../images/gifs/carefree.gif';
import Giddy from '../../images/gifs/excited.gif';


export class Questions4 extends Component {

  render() {
    return (
      <div className="body">
        <QuestionsContainer question={'After 9 months, What was my attitude? '}
                            background1={Confident}  oneTitle={'Confident'}    value1={'true'}
                            background2={FedUp}      twoTitle={'Fed Up'}        value2={'false'}
                            background3={CareFree} threeTitle={'Care Free'} value3={'false'}
                            background4={Giddy}    fourTitle={'Giddy'}     value4={'false'}
            link={'/w4'}                ></QuestionsContainer>
      </div>
    );
  }
}

export default Questions4;
