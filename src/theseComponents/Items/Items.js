import React from 'react'

const Items = (props) => {
    console.log(props.items)
    return ( <> { props.items.map(item => { return (<p>{ item.name }</p>) }) } </> )}

export default Items;