import React from 'react';

const Button = (props) => {
    const style = {
        border: "1px solid black",
        borderRadius: "8px",
        margin: "5px",
        padding: "8px",
        // display: "flex",
        backgroundColor: "white"
    }
    return(
        <button style={style} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;