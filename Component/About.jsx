import React from 'react';
import aboutimage from '../Assests/about.png';

function About() {
 return (
  <div id="about">
   <div className="about-image">
    <img src={aboutimage} alt="" />
   </div>
   <div className="about-text">
    <h1>LEARN MORE ABOUT US</h1>
    <p>
     Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.</p>
    <button>READ MORE </button>

   </div>





  </div>

 )
}
export default About;