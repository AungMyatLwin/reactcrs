import React from "react"

function Todoitem(props)
{
    console.log(props)
    return(
    <div>
        <input type="checkbox" checked={props.items.complete}/>
        <li>{props.items.name}</li>
    </div>)
}
export default Todoitem