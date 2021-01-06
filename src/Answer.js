import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Answer extends Component {
    static propTypes = {
        prop: PropTypes.func
    }

    state = {
        countVisible: false,
    }

    render() {
        const data = this.props.data;

        const answersJSX = data.answers.map(answer => {
            const idAnswer = "q"+data.id+"r"+answer.id;
            return (
                <div className="form-check">
                    <input className="form-check-input" type="radio" 
                    name={"radiogrp-"+data.id} id={idAnswer} 
                    onChange={this.handleSelectedAnswer}
                    value={answer.number} />
                    <label className="form-check-label" htmlFor={idAnswer}>
                        {answer.name} 
                        {this.props.countVisible ? answer.count : ""} 
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
