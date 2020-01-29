import React, {Component} from 'react';

class AddTitleForm extends Component {

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTitle(this.state.value);
        this.setState({ value: ''})
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Add Pinball Table"
                />

                <input 
                    type="submit"
                    value="Add"
                />
            </form>
        );
    }
}

export default AddTitleForm;