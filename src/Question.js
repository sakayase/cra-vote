import React, {Component} from 'react';
import Answer from './Answer';

class Question extends Component {
    state = {
        countVisible: false,
        selectedAnswer: ""
    }

    handleVote = () => {
        this.setState({
            countVisible: true
        })

        const question = this.props.data;
        console.log(question);
        console.log(this.state.selectedAnswer);
    }

    handleSelectedAnswer = (event) => {
        this.setState({
            selectedAnswer: event.target.value
        })
    }

    render() {
        const data = this.props.data;
        
        
        return(
            <div className="card mb-3">
                <div className="card-header bg-primary text-white border-primary">
                    {data.title}
                </div>
                <div className="card-body">
                <form>
                    <Answer countVisible={this.state.countVisible} data={data}/>
                </form>
                </div>
                <div className="card-footer bg-transparent">
                    <button className="btn btn-primary"
                        onClick={this.handleVote}>Voter</button>
                </div>
            </div>
        );
    }
}

export default Question;