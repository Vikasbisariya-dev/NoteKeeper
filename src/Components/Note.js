import React from "react";




const Note = (props)=>{

    function handleclick () {
        props.onDelete(props.id)
    }
    return(
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleclick}>Del</button>
        </div>
    );
}


export default Note;