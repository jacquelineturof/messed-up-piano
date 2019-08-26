import React from 'react'

import './KeyPad.css'

const playAudio = (audioID, setDisplay, soundName) => { 
    const sound = document.getElementById(audioID)
    sound.play()
    // set display
    setDisplay(soundName)
}

const keyPad = props => {
    const audioTrack =  (
        <audio id = { props.keyText } className = "clip" src = { props.file }>
            <source src = { props.file } type = "audio/wav" />
        </audio>
    )
    
    return (
        <div 
            className = "drum-pad" 
            onClick = { () => playAudio(props.keyText, props.setDisplay, props.sound ) }
            id = { props.sound }>
                { props.keyText }
            { audioTrack }
        </div>
    )
}

export default keyPad