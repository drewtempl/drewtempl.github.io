import React from "react";
import { Contact } from './Contact';


export function Info() {
    return (
        <div className="intro">
            <h2>About Me</h2>
            <p>I am a junior at App State studying computer science.</p>
            <a class="link" href="https://github.com/drewtempl">github.com/drewtempl</a>
            <a class="resume-button" href="./" target="_blank">My Resume</a>
            <Contact></Contact>
        </div>
    );
}