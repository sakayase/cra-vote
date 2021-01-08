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
        this.handleVoteCount();
    }

    handleSelectedChange = (event) => {
        const id = event.target.id;
        
        this.setState({
            selectedAnswer: id,
        })
    }
    
    handleVoteCount = () => {
        const questionId = this.state.selectedAnswer.slice(0, 1);
        const answerId = this.state.selectedAnswer.slice(1, 2);
        console.log(this.props.onVote);
        this.props.updateCount(questionId, answerId);
    }

    render() {
        const data = this.props.data;
        
        
        return(
            <div className="card mb-3">
                <div className="card-header bg-primary text-white border-primary">
                    {data.title}
                </div>
                <div className="card-body">
                <form onChange={this.handleSelectedChange} >
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