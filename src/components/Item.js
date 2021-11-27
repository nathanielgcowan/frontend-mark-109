import React from 'react';

const Item = (props) => {
    const style = {
        border: "1px solid black",
        borderRadius: "5px",
        margin: "5px",
        minWidth: "200px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "floralwhite"
    }
    return (
        <div style={style}>
            {props.name}
        </div>
    )
}

export default Item;