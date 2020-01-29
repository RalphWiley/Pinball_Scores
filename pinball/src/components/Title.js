import React from 'react';
import Score from './Score';

const Title = (props) => {

    
    return (
        <div className="title">
            <span className="title-name">
                {props.name}
            </span>

            <Score 
                score={props.score}
                index={props.index}
                changeScore={props.changeScore}
                submitScore={props.submitScore}
                />
        </div>
    )
}

export default Title;