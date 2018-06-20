import React, { Component } from 'react';
import './Questions.css';
import {QuestionsContainer} from '../../components';
import No from '../../images/gifs/yes.gif';
import Yes from '../../images/gifs/no.gif';



export class Questions2 extends Component {

  render() {
    return (
      <div className="body">
        <QuestionsContainer question={'Did I reach my breaking point?'}
                            background1={Yes}  oneTitle={'Yes'}    value1={'true'}
                            background2={No}      twoTitle={'No'}        value2={'false'}

            link={'/w2'}                ></QuestionsContainer>
      </div>
    );
  }
}

export default Questions2;
