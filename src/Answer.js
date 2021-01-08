import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Answer extends Component {
    static propTypes = {
        prop: PropTypes.func
    }

    state = {
        countVisible: false,
        selectedAnswer: '',
    }

    render() {
        const data = this.props.data;

        const answersJSX = data.answers.map(answer => {
            const idAnswer = String(data.id)+String(answer.id);
            return (
                <div className="form-check container">
                    <input className="form-check-input" type="radio" 
                    name={"radiogrp-"+data.id} id={idAnswer} 
                    onChange={this.handleSelectedAnswer}
                    value={answer.number} />
                    <label className="form-check-label row" htmlFor={idAnswer}>
                        <div className="col">{answer.name}</div> 
                        <div className="col text-right">{this.props.countVisible ? answer.count : ""}</div> 
                    </label>
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
