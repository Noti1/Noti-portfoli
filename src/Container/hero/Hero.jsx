import React from 'react'
import anime from '../../assets/anime.svg'
import arrow from '../../assets/icon.svg'
import './hero.css'
const Hero = () => {
  return (
    <div className="hero section__padding" >
      <div className="hero__contents">
        <div className="hero__contents-intro">
        <h1 className='h1-hero'>Hello, I'm Noti ッ</h1>
        <p className='p-hero'>Ready to infuse your projects with <strong>creativity and functionality</strong>, I'm here to offer my <strong>Freelance Web Development Services</strong>. Let's turn your ideas into captivating online experiences! 💻✨</p>
        <div className='div-hero'>Currently looking for a Freelance project to start ☁️</div>
        </div>
        <div className="hero__contents-image">
          <div><img src={anime} /></div>
        </div>
      </div>
      <div className="icon"><img src={arrow} /></div>
    </div>
  )
}

export default Hero
