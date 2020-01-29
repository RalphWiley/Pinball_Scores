import React from 'react';

const Score = (props) => {

    let index= props.index;

    return (
        <div className="counter">
            <form className="score-form" onSubmit={e => props.submitScore(e.target.score)}>
                <input 
                    type="text" 
                    // value={props.score}
                    onChange={e => props.changeScore(index, e.target.score)}
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


export default Score;