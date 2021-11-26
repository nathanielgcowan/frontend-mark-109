import React from 'react';

const ImageButton = (props) => {
    const style = {
        border: "1px solid black",
        borderRadius: "8px",
        margin: "5px",
        padding: "8px",
        display: "flex",
        backgroundColor: "white"
    }
    return(
        <button style={style} onClick={props.onClick}><img src={props.image} alt="" /></button>
    )
}

export default ImageButton;