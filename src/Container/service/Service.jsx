import React from 'react'
import './service.css'
import s_img from '../../assets/service-2.png'
import s_img_1 from '../../assets/service-1.png'
const Service = () => {
  return (
    <div className="service section__padding" id='service'>
        <div className="service__contents-one">
            <div className="service__contents-image">
                <img src={s_img}/>
            </div>
            <div className="service__contents-services">
                <h2>What i can do for you</h2>
                <p>I specialize in crafting high-performance websites from Scratch, <strong>integrating user-friendly and responsive designs </strong> that seamlessly adapt to various devices. <strong>Proficient in HTML, CSS, and JavaScript</strong> <br/> <br/> I bring a wealth of expertise to ensure a seamless and engaging user experience. Additionally, my skills extend to <strong> React JS </strong>, allowing me to create dynamic and efficient <strong>single-page web applications</strong> that elevate your online presence. Let me bring your vision to life with cutting-edge web development tailored to your unique needs</p>
            </div>
        </div>
        
        <div className="service__contents-two">

        <div className="service__contents-services">
                <h2>What am capable of ..</h2>
                <p>Passionate about my work in the field, I bring unwavering enthusiasm to every project. Committed to effective communication and teamwork, I thrive on building strong connections and contributing to a positive work environment, <strong>always in solution mode</strong> , ensuring efficiency and collaboration.</p>
            </div>
            <div className="service__contents-image">
                <img src={s_img_1}/>
            </div>
            
        </div>

    </div>
  )
}

export default Service
