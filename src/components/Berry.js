import React from 'react';

const Berry = (props) => {
    const style = {
        border: "1px solid black",
        borderRadius: "5px",
        margin: "5px",
        minWidth: "200px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "cornsilk"
    }
    return(
        <div style={style}>
            {props.name}
        </div>
    )
}

export default Berry;