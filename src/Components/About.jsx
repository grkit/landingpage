import React from 'react'
import pic from "../Components/pic.png"
import Card from ".//Card"


const About = () => {
  return (
    <div className='home'>
      
      <center>
          <div className='column'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quos amet a, omnis voluptatibus odit dignissimos tempore fugiat distinctio quis ab voluptatum aliquam commodi incidunt 
          
          </div>
      </center>
          <div className='pic'>
              <img 
              src={pic} alt="Image" height={"auto"} width={"10%"}/>
          </div>
       
      <Card/>
    </div>
  )
}

export default About
