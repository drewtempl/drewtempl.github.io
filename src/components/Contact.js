import React from "react";

export function Contact() {
    return (
        <>
            <h3>Contact</h3>
            <div class="contact-wrapper">

                <div class="email">
                    <img src={require('../images/email-red.png')} />
                    <div>drewtempleton9@gmail.com</div>
                </div>
                <div class="linked-in">
                    <img src={require('../images/LI-In-Bug.png')} />
                    <a class="link" href="https://www.linkedin.com/in/drewtempl/">LinkedIn Profile</a>
                </div>
            </div>
        </>
    );
}