import React from 'react';
import selfie from '../selfie.jpg'
const AboutMe = () => {
    return (
        <div>
            <div className='title'>About me</div>
            <div className="aboutMe">
                <div className="paragraph">
                    <p>My name is Alex Wu and I'm from Taiwan. I recently graduated from Santa Clara University with a master's in Computer Science and Engineering.</p>
                    <p>My first programming experience was when I was in college. At that time, my department was like business analysis. I used python crawlers and built machine learning models. I began to wonder about how it works behind the scenes, such as how data is transmitted, how the operating system works. So I became more and more interested in computer science and started to pursue a master's degree in computer science.</p>
                    <p> While I was an intern in Academia Sinica of Taiwan, I developed questionnaire reginizing system using Python. Therefore, my most familiar langugue is Python.</p>
                    <p>Now, I'm focus more on lower level of computers, such as operating system, computer architecture, and computer network. I also like to learning online courses in my spare time. I'm currently learning web development on Udemy. Though programming HTML and CSS is really fun and interesting, what my patient for is back-end development. I like to constuct the logic behind scenes. In the future, I'll learn Python Flask and Go.</p>
                    <p>I'm interested in playing basketball. I was a basketball player on the team of my department in college. Although I'm not very good on it (often be benched in games), I still love the time playing basketball with friends. I am also interested in outdoor water activities. I love to river tracing, rafting, and diving. I plan to take diving courses and apply diving license in the near future.</p>
                    <p>Additionally, I love to watch situation comedy. My favorite one is The Big Bang Theory! I also like Modern Family, Brooklyn 99, How I Met Your Mother, and so on. In my mind, there's one little dream to become a situation comedy actor. I may go to acting classes after I settle down my life in the bay area.</p>
                </div>

                <img src={selfie} id="selfie" />
            </div>
        </div>
    )
}
export default AboutMe