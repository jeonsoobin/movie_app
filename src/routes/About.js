import React from 'react'
import './About.css'

export default function About(props) {
    console.log(props);
    return (
        <div className="about_container">
            <span>"A javascript library for building user interfaces"</span>
            <span>- react -</span>
        </div>
    )
}
