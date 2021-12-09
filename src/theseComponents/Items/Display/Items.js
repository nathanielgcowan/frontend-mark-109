import React from 'react'
import Item from './Item'

const Items = (props) => {
    return ( <> { props.items.map(item => { 
        return (<div key={props.id}><Item
                    name={item.name} 
                    handleCallbackOne={props.handleCallbackOne} 
                    handleSiblingNumber={props.handleSiblingNumber} 
                    siblingNumber={ props.siblingNumber }
                    parentToChild={ props.parentToChild }
                    />
        </div>)
    }) } </> )}

export default Items;


// Functional Component - goes through less React checks. Gives you a small performance boost.
// https://learning.flatironschool.com/courses/1883/pages/types-of-components?module_item_id=259634
