import React, { Component } from 'react';
import './Questions.css';
import {QuestionsContainer} from '../../components'
import Estatic from '../../images/gifs/estatic.gif';
import Happy from '../../images/gifs/happy.gif';
import Sad from '../../images/gifs/sad.gif';
import Confused from '../../images/gifs/confused.gif';


export class Questions extends Component {

  render() {
    return (
      <div className="body">
        <QuestionsContainer question={'How did I spend the first 3 months at IBM feeling?'}
                            background1={Estatic}  oneTitle={'Estatic'}    value1={'false'}
                            background2={Sad}      twoTitle={'Sad'}        value2={'true'}
                            background3={Confused} threeTitle={'Confused'} value3={'false'}
                            background4={Happy}    fourTitle={'Happy'}     value4={'false'}
            link={'/workdone:one'}                ></QuestionsContainer>
      </div>
    );
  }
}

export default Questions;
