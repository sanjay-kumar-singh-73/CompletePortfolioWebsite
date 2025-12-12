import React from 'react'
import './Home.css'

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import Img from '../assests/sagar.png'
function Home() {
  return (
    <div className='home'>
      <div className='left'>
        <h3>Hi,I'am</h3>
        <h1>Sagar Satyarthi Mishra</h1>
        <h4>Java Developer</h4>
        <p>"Java Developer with experience in Core Java, Spring Boot, REST APIs & MySQL. Focused on clean code and scalable application development."</p>
        <div className='social-media'>
            <li><FaFacebookF /></li>
            <li><FaInstagram /></li>
            <li><FiGithub /></li>
            <li><FaTwitter /></li>
        </div>
      </div>
      <div className='right'>
        <img src={Img} alt=''/>
      </div>
    </div>
  )
}

export default Home
