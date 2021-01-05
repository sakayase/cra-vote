import React, { Component } from 'react';

class Form extends Component {

    state = {
        displayVote: false,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit();
    }

    setCountVisibility = () => {
        this.setState ({
            displayVote: true,
        })
    }

    render() {

        const FormJSX = this.props.questions.map(question => {

            const answersJSX = question.answers.map(answer => {
                const answerId = `${question.id}${answer.id}`
                return (
                    <div key={answer.id} className="form-check container">
                        <div className="row">
                            <div className="col">
                                <input type="radio" name="answer" className="form-check-input" id={answerId} onChange={this.props.onChange}/>
                                <label htmlFor={answerId} className="form-check-label">{answer.name}</label>
                            </div>
                            <div className={`col`}>    
                                <span>{this.state.displayVote? answer.count : ""}</span>
                            </div>
                        </div>
                    </div>
                )
            })

            return (
                <form key={question.id} className="card border-primary mb-3" action="" onSubmit={this.handleSubmit}>
                    <h2 className="card-header bg-primary border-primary text-white">{question.title}</h2>
                    <div className="card-body">
                        {answersJSX}
                    </div>
                    <input type="submit" value="Votez" className="btn btn-primary"/>
                </form>
            )
          }) 

        return (
            <div className="form">
                {FormJSX}
            </div>
        );
    }
}

export default Form;    