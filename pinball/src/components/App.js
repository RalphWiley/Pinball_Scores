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

    prevTitleId = 4;


    handleAddTitle = (name) => {
        this.setState( prevState => {
            return {
                titles: [
                    ...prevState.titles,
                    {
                        name,
                        score: 0,
                        id: this.prevTitleId += 1
                    }
                ]
            };
        });
    }

    handleScoreChange = (index, e) => {
        this.setState( prevState => ({ 
            score: prevState.titles[index].score += e
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.score(this.state.score);
        console.log(this.props.score(this.state.score))
        // this.setState({ score: ''})
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
                        key={title.id.toString()}
                        index={index}
                        changeScore={this.handleScoreChange}
                        submitScore={this.handleSubmit}
                    />
                )}

                <AddTitleForm addTitle={this.handleAddTitle} />
            </div>
        )
    }
}

export default App;