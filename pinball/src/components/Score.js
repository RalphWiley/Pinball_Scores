import React, { Component } from 'react';

class Score extends Component {
    state = {
        score: ""
    }

    updateScore = () => {
        this.setState( prevState => ({
            score: prevState.score
        }))
    }

    handleChange = (event) => {
        this.setState({score: event.target.score})
    }

    render(){
        return (
            <div className="counter">
                <form className="score-form">
                    
                        <input type="text" value={this.state.score} onChange={this.handleChange}/>
                   
                    <button className="counter-action" onClick={this.updateScore}>update</button>
                </form>
            </div>
        )
    }
}

export default Score;