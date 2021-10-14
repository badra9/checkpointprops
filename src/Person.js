import React from 'react';

function Person(props){
    let styleP = {
        border: '1px solid #619fcb',
        padding: '5px'
    }
    let styleSpan = {
        display: 'inline-block',
        backgroundColor: 'black',
        with: '60px',
        color: 'red',
        padding: '5px',
        borderRadius: '6px'
    }
    return (
        <>
            <p style={styleP}>Vous ete <span style={styleSpan}>{props.name}</span>
                   et vous serez un <span style={styleSpan}>{props.profession}</span> </p>
        </>
    )
}

export default Person;