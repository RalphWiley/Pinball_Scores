import React from 'react';
import Score from './Score';

const Title = (props) => {
    return (
        <div className="title">
            <span className="title-name">
                {props.name}
            </span>

            <Score />
        </div>
    )
}

export default Title;