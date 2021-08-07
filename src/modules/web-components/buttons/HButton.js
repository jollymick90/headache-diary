import React from 'react';

const HButton = props => {
    const defaultStyle = "border-2 rounded-lg border-yellow-300 px-5 py-2"
    return (

        <button
            className={props.className ? props.className : defaultStyle}
            onClick={props.onClick}
        >

            {props.children}
        </button>

    )
}

export default HButton;