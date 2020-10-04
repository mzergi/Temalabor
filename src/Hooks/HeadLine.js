import React, {useState} from 'react';

export default function useHeadLine(_text){
    const [headLine, setHeadLine] = useState({
        text: _text
    })
    return(
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'rgba(175, 238, 238, 0.4)'
        }}
        >
            <h1>{headLine.text}</h1>
        </div>
    )
}