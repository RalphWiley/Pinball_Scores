import React, { Component } from 'react';
import Header from './Header';
import Title from './Title';

class App extends Component {
    state = {
        titles: [
            {
                name: "Attack From Mars",
                id: 1
            },
            {
                name: "Terminator",
                id: 2
            },
            {
                name: "Addam's Family",
                id: 3
            },
            {
                name: "FIFA 1996",
                id: 4
            }
        ]
    };
    render(){
        return (
            <div className="scoreboard">
                <Header 
                    title="Pinball Scores"
                />

                {/* PINBALL titles list */}
                {this.state.titles.map(title =>
                    <Title
                        name={title.name}
                        id={title.id}
                        key={title.id.toString()}
                    />
                )}
            </div>
        )
    }
}

export default App;