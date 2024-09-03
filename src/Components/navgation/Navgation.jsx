
import React,{ useState } from 'react'
import './navgation.css'
import x from '../../assets/x.svg'
import ar from '../../assets/ar.svg'
import ci from '../../assets/ci.svg'

const Menu = ()=>(
  <>
  <a href="#home">Home</a>
    <a href="#service">Services</a>
    <a href="#project">Projects</a>
  </>
)
const Navgation = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className="navbar color__bg section__padding" id='home'>
        <div className="navbar__contents">
            <div className="navbar__contents-logo">
                 <h1>Mohamed</h1>
                  <h1 className='ali'>Noti</h1>
           
            </div>
            <div className="navbar__contents-links">
              <div className="navbar__contents-links_link">
                <Menu/>
                
                
              </div>
                <div className="x">
                 <a href="https://twitter.com/mo_noti2_"> <img src={x}/> </a>
                </div>
                <div className="menu">
                  { toggleMenu
                  ?<div className="close" onClick={()=>setToggleMenu(false)}>
                     <img src={ci}/>
                    </div>
                  :<div className="close" onClick={()=>setToggleMenu(true)}>
                     <img src={ar}/>
                    </div>
                  }
                  { toggleMenu && (
                    <div className="menu2 scale-up-center">
                      
                       <a href="#home">Home</a>
                       <a href="#service">Services</a>
                       <a href="#project">Projects</a>
                      
                    </div>
                  )

                  }
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Navgation
