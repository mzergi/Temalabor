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
            alignItems: "center"
        }}
        >
            <h3>{headLine.text}</h3>
        </div>
    )
}