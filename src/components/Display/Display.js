import React from 'react'

import classes from './Display.module.css'

const display = props => (
    <div id = "display" className = { classes.Display }>
        { props.output }
    </div>
)

export default display