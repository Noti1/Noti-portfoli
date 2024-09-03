import React from 'react'
import './projects.css'
import gpt3 from '../../assets/gpt3.png'
import visit from '../../assets/visit.svg'
import amazon from '../../assets/amazon.png'


const Project = () => {

  return (
      <div className='project'>
          <h2 className='project-h2' id='project'>Projects that Define My Skills and Passion</h2>
    <div className="projects">
       
       <div className="projects__grid ">
           
             <div className="project_grid-one">
                <div className="projects__grid-one_contents">
                     <div className="img_border">
                    <div className="projects__grid-one_contents-image_overlay">
                     <img src={gpt3}/>
                     </div>
                     </div>
              </div>  
                <div className="projects__grid-one_contents-content">
                    <div className='project-gpt3'>
                    <h3>GPT-3 Land page</h3>
                    <p> leveling up my React skills with a focus on functional components, hooks, and props. The project showcased GPT-3's capabilities while refining my UI development expertise.</p>
                    </div>
                    
                        
                      <button className='visit'> <a href='https://oasesgpt3.netlify.app/'>visit <img src={visit}/></a> </button>
                    
                    
                </div>
            </div>
            <div className="more">
             <mark> <p>More projects are comming soon</p> </mark>
             <div className="project_grid-one grid2">
              <div className="projects__grid-one_contents">
              <div className="img_border">
                  <div className=" overlay-two">
                       <img src={amazon}/>
                  </div>
                  </div>
              </div>   
              <div className="projects__grid-one_contents-content ">
                    <div className='project-gpt3'>
                    <h3>Constimatic E-comarce</h3>
                    <p> Elevating my proficiency in JavaScript DOM and React has been a dynamic journey. This project not only showcased my capabilities but also provided a platform for me to finely tune and enhance my skills in UI development.</p>
                    </div>
                    
                        
                      <button className='visit'> <a href="https://amazon-3l2.pages.dev/"> visit <img src={visit}/> </a></button>
                    
                    
                </div>
            </div> 
            </div>     
         </div>
        </div> 
     </div>
     
   
  )

}

export default Project;
