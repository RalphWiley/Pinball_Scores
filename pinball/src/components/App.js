import React, { Component } from 'react';
import Header from './Header';
import Title from './Title';
import AddTitleForm from './AddTitleForm';

class App extends Component {
    state = {
        titles: [
            {
                name: "Attack From Mars",
                score: 0,
                id: 1
            },
            {
                name: "Terminator",
                score: 0,
                id: 2
            },
            {
                name: "Addam's Family",
                score: 0,
                id: 3
            },
            {
                name: "FIFA 1996",
                score: 0,
                id: 4
            }
        ]
    };

    handleAddTitle = (name) => {
        const nextId = Math.max(...this.state.titles.map(({ id }) => id)) + 1;
        this.setState( prevState => {
            return {
                titles: [
                    ...prevState.titles,
                    {
                        name,
                        score: 0,
                        id: nextId
                    }
                ]
            };
        });
    }

    handleUpdateScore = (id, score) => {
        this.setState({
            titles: this.state.titles.reduce(
                (acc, title) => {
                    if(title.id === id){
                        title.score = score;
                    }
                    acc.push(title);
                    return acc;
                },
                []
            )
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.submitScore(this.state.score)
    }

    render(){
        return (
            <div className="scoreboard">
                <Header 
                    title="Pinball Scores"
                />

                {/* PINBALL titles list */}
                {this.state.titles.map( (title, index) =>
                    <Title
                        name={title.name}
                        id={title.id}
                        score={title.score}
                        key={title.id}
                        index={index}
                        submitScore={this.handleUpdateScore}
                    />
                )}

                <AddTitleForm addTitle={this.handleAddTitle} />
            </div>
        )
    }
}

export default App;