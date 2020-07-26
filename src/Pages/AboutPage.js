import React from 'react';
import Hero from '../Components/Hero'
import Content from '../Components/Content'
function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <div class="text-center">
                <img src={require('../Assets/Images/rahul.png')} class="rounded" alt="Rahul" width="200" height="200"></img>
            </div>
            <Content>
                <br></br>
                {/* <img src={require('../Assets/Images/rahul.png')} alt="Rahul Mahajan" width="200" height="200" border-radius= "50px" /> */}
                <p>I am final undergraduate student pursuing B. Tech from Vellore Institute of Technology in Computer Science and Engineering.</p>
                <p>Apart from academics, I have been involved in an Open Source Programming Club for a year and coordinator of online events from Qubit at TechnoVIT'19.</p>
                <p>My objectives are to build various skills and gain experience through different avenues to become a skilled person in my interest and I want to learn various dynamic approaches to different problems.</p>
                <p>As of now, I am interested in strengthening my knowledge of Object-Oriented Programming, Data structures and algorithms, develop applications, and understanding its real-life implementation.</p>
                <p>Also, I am interested in making websites, particularly working on front-end using React JS.</p>
            </Content>
        </div>
    );
}

export default AboutPage;  