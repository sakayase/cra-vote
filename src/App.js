import React, { Component } from 'react';
import Question from './Question';

class App extends Component {
  state = {
    questions: [
      {
        id:0,
        title: 'Should dogs be allowed to fly?',
        answers:[
          {
            id: 0,
            name: 'yes', 
            count: 18,
          }, 
          {
            id: 1,
            name: 'no', 
            count: 1,
          }, 
          {
            id: 2,
            name: 'osef frero',
            count: 28,
          }
        ],
        answer: '',
      },
      {
        id:1,
        title: 'Should Developers use IDEs?',  
        answers:[
          {
            id: 0,
            name: 'yes', 
            count: 5,
          }, 
          {
            id: 1,
            name: 'no', 
            count: 81,
          }, 
          {
            id: 2,
            name: 'osef frero',
            count: 18,
          }
        ],
        answer: '',
      },
      {
        id:2,
        title: 'Should doors be shut at night?',  
        answers:[
          { 
            id: 0,
            name: 'yes', 
            count: 2,
          }, 
          {
            id: 1,
            name: 'no',
            count: 17,
          }, 
          {
            id: 2,
            name: 'osef frero',
            count: 8,
          },
          {
            id: 3,
            name: 'La réponse D',
            count: 8,
          }
        ],
        answer: '',
      }
    ]
    
  }

      /*
      const id = event.target.id;
      const questionId = id.slice(0, 1);
      const answerId = id.slice(1, 2);
      */

/* Ancienne reponse: mauvaise car pas possible de séparer les questions
  handleSubmit = (event) => {
    let newState = this.state.questions;
    console.log(newState);
    newState.forEach(question => {
      if (question.answer){
        question.answers[question.answer].count++;
      }
    });
  }

  handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.id);
    let newState = this.state.questions;
    const id = event.target.id;
    const questionId = id.slice(0, 1);
    const answerId = id.slice(1, 2);
    newState[questionId].answer = answerId;
    this.setState({
      questions: newState,
    })
  }
*/


  updateCount = (questionId, answerId) => {
    const initialQuestions = this.state.questions;
    initialQuestions[questionId].answers[answerId].count = initialQuestions[questionId].answers[answerId].count + 1; // penser a demander a jb pq sans 
                                                                                                                     // setState il actualise l'object Questions dans le state
  }                                                                                                                  // (meme instance ?)

  render() {

    const questionsJSX = this.state.questions.map(question => {
      return <Question updateCount={this.updateCount} key={question.id} data={question} />
    })

    return (
      <div className="App container">
        {questionsJSX}
      </div>
    );
  }
}

export default App;