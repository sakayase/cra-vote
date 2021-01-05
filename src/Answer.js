import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Answer extends Component {
    static propTypes = {
        prop: PropTypes.func
    }

    render() {


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
            <div>
                {answersJSX}
            </div>
        )
    }
}
