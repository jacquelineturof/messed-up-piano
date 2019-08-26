import React from 'react'

import KeyPad from './KeyPad/KeyPad'

import classes from './KeyPadGrid.module.css'

// Audio Files
import asharp3 from './Audio/a-3.mp3'
import fsharp3 from './Audio/f-3.mp3'
import fsharp4 from './Audio/f-4.mp3'
import fsharp5 from './Audio/f-5.mp3'
import g5 from './Audio/g5.mp3'
import g3 from './Audio/g3.mp3'
import g4 from './Audio/g4.mp3'
import gsharp4 from './Audio/g-4.mp3'
import gsharp5 from './Audio/g-5.mp3'

const keyPadGrid = props => (
    <div className = { classes.KeyPadGrid }>
        <KeyPad 
            keyText = "Q" 
            sound = "aSharp3" 
            file = { asharp3 } 
            setDisplay = { props.setDisplay } />
        <KeyPad 
            keyText = "W" 
            sound = "fSharp3" 
            file = { fsharp3 }
            setDisplay = { props.setDisplay } />
        <KeyPad 
            keyText = "E" 
            sound = "fSharp4" 
            file = { fsharp4 } 
            setDisplay = { props.setDisplay } />
        <KeyPad 
            keyText = "A" 
            sound = "fSharp5" 
            file = { fsharp5 } 
            setDisplay = { props.setDisplay } />
        <KeyPad 
            keyText = "S" 
            sound = "g5" 
            file = { g5 }
            setDisplay = { props.setDisplay } />
        <KeyPad 
            keyText = "D" 
            sound = "g3" 
            file = { g3 }
            setDisplay = { props.setDisplay } />
        <KeyPad 
            keyText = "Z" 
            sound = "g4" 
            file = { g4 }
            setDisplay = { props.setDisplay } />
        <KeyPad 
            keyText = "X" 
            sound = "gSharp4" 
            file = { gsharp4 }
            setDisplay = { props.setDisplay } />
        <KeyPad 
            keyText = "C" 
            sound = "gSharp5" 
            file = { gsharp5 }
            setDisplay = { props.setDisplay } />
    </div>
)

export default keyPadGrid