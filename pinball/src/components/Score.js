import React, { Component } from 'react';

class Score extends Component {
  
    state = {
        value: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.submitScore(this.props.id, e.target.score.value);
        this.setState({ value: ''});
    }

    handleChange = e => {
        this.setState({ value: e.target.value })
        
    }

render(){
    return (
        <div className="counter">
            <form className="score-form" onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.value}
                    type="text"
                    name="score" 
                    onChange={this.handleChange}
                    placeholder="Enter Score"  
                />

                <input 
                    type="submit"
                    value="Add"
                />
            </form>
        </div>
    )
    }
}

export default Score;