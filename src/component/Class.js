import React, { Component } from 'react'
import './style.css'

 class Class extends Component {
    render() {
        return (
            <div className='box2'>
                <h3>This is created using class component</h3>
             <p>This is done using external CSS</p>
             <p style={{color:"red"}}>This is done using inline CSS</p>
            </div>
        )
    }
}

export default Class




