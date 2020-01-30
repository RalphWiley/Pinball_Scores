import React from 'react';
import Score from './Score';

const Title = (props) => {
    
    return (
        <div className="title">
            <span className="title-name">
                {props.name} ({props.score})
            </span>

            <Score 
                id={props.id}
                submitScore={props.submitScore}
                />
        </div>
    )
}

export default Title;