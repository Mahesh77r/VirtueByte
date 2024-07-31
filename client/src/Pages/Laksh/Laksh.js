import React from 'react'
import './Laksh.css'
import { useState } from 'react'

const Laksh = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };



  return (
    <div className='about-us-container'>
        <div className='about-us-contents' >
           <h1>ABOUT US</h1>

           {isExpanded?<h5>For more than 7 years, we have provided clients with technology services such as software development, cross-platform mobile app, native app development, and QA services. We have created 60+ customized solutions, including enterprise software, e-commerce, B2B, IoT, and big data platforms, while working with 28+ clients. We meet deadlines and adhere to budgets while delivering top-notch, reliable solutions that help clients' businesses go digital in accordance with their preferred technology.</h5>:<h5>For more than 7 years, we have provided clients with technology services such as software development, cross-platform mobile app, native app development, and QA services.</h5> }
          
          <button style={{color:"blue"}} onClick={toggleExpanded}>{isExpanded?'show less':'show more...'}</button>
           
        </div>
        <div className='about-us-image'>
        <img src='about-us.svg' alt='' />
        </div>
      
    </div>
  )
}

export default Laksh