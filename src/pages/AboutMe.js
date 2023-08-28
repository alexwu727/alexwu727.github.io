import React from 'react';
import selfie from '../images/selfie.jpg'
import Markdown from '../components/Markdown.jsx';

const AboutMe = () => {
    return (
        <div>
            <div className='title'>About me</div>
            <div className="aboutMe">
                <div className="paragraph">
                    <Markdown filePath={'aboutMe.md'} />
                </div>

                <img src={selfie} id="selfie" />
            </div>

        </div>
    )
}
export default AboutMe