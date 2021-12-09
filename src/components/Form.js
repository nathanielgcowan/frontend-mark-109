import React from 'react';

const Form = (props) => {
    const style = {
        border: "1px solid black",
        borderRadius: "8px",
        textAlign: "left",
        backgroundColor: "white",
        fontFamily: 'normal'
    }
    return(
        <form style={style}>{props.children}</form>
    )
}

export default Form;