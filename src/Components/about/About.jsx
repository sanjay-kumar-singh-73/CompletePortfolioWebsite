import React from 'react'
import "./About.css"
import Img from '../assests/sagar.png'

function About() {
    return (
        <>
            {/* <div className="main">About</div> */}
            <div className="about-content">
                <div className="left">
                    <img src={Img} alt=''/>
                </div>
                <div className="right">            
                    <div className="card">
                        <h1>Sagar Satyarathi Mishra</h1>
                        <h3>Java Full Stack Developer</h3>
                        <h2>Education:<span>B.tech In Computer Science And Engineering</span></h2>
                        <h2>Programing:<span>Java (Pro),MERN</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, labore quos nobis dolore officiis error placeat libero, cumque perferendis explicabo voluptates quo esse numquam hic deleniti, sapiente necessitatibus? Necessitatibus, numquam.</p>
                        <button>View More About</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
