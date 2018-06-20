import React, { Component } from 'react';
import './QuestionsContainers.css';
import {Link} from 'react-router-dom';

export class QuestionsContainer extends Component {

  constructor(props) {
 super(props);

 this.state = {
    showPage: '',
 }
}

showCorrectPage = (e) => {
  if (e.target.value === 'true') {
    this.setState({
      showPage: true
    })
  } else {
    this.setState({
      showPage: false
    })
  }
}



  render() {
    return (
      <div>
        <h1 className="questionTitle">{this.props.question}</h1>
        <div className="answersContainer">
          <form className="answerStyle">

              <div className="answerstyle">
                <h1 className="answerText">{this.props.oneTitle}</h1>
                <div style={{margin: "0 auto", width: "418px", height: "220px"}}>
                  <input className="radioStyle" type="radio" value={this.props.value1}
                          name="options" onChange={this.showCorrectPage.bind(this)}></input>
                  <div style={{backgroundImage: `url(${this.props.background1})`}} className="answerGif"></div>
                </div>
              </div>
              <div className="answerstyle">
                <h1 className="answerText">{this.props.twoTitle}</h1>
                  <div style={{margin: "0 auto", width: "418px", height: "220px"}}>
                    <input className="radioStyle" type="radio" value={this.props.value2}
                            name="options" onChange={this.showCorrectPage.bind(this)}></input>
                    <div style={{backgroundImage: `url(${this.props.background2})`}} className="answerGif"></div>
                  </div>
              </div>
              <div className="answerstyle">
                <h1 className="answerText">{this.props.threeTitle}</h1>
                  <div style={{margin: "0 auto", width: "418px", height: "220px"}}>
                    <input className="radioStyle" type="radio" value={this.props.value3}
                            name="options" onChange={this.showCorrectPage.bind(this)}></input>
                    <div style={{backgroundImage: `url(${this.props.background3})`}} className="answerGif"></div>
                  </div>
              </div>
              <div className="answerstyle">
                <h1 className="answerText">{this.props.fourTitle}</h1>
                  <div style={{margin: "0 auto", width: "418px", height: "220px"}}>
                    <input className="radioStyle" type="radio" value={this.props.value4}
                            name="options" onChange={this.showCorrectPage.bind(this)}></input>
                    <div style={{backgroundImage: `url(${this.props.background4})`}} className="answerGif"></div>
                  </div>
              </div>
          </form>
          {this.state.showPage === true &&
                                            <div className="correct">
                                                <Link to={this.props.link} style={{textDecoration: "none", color: "#00FF00"}}>
                                                  <h1>Correct!</h1>
                                                </Link>
                                              </div>
                                           }
          {this.state.showPage === false &&
                                              <div className="wrong">
                                                <Link to={this.props.link} style={{textDecoration: "none", color: "#FF0000"}}>
                                                  <h1>Wrong!</h1>
                                                </Link>
                                              </div>
}

        </div>
      </div>
    );
  }
}

export default QuestionsContainer;
