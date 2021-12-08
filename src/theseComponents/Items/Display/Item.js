import React from 'react';

const Item = (props) => {
    return (<div >
                { props.name }
                <button onClick={props.handleCallbackOne}>Add to count one</button>
                <button onClick={props.handleSiblingNumber}>Handle Sibling Number</button>
                { props.siblingNumber }{' '}
                { props.parentToChild }
            </div>) }
export default Item

// Presentational Component - a component whose primary responsibility is to render some piece
// of what the user sees
// https://learning.flatironschool.com/courses/1883/pages/react-presentation-components?module_item_id=259635

