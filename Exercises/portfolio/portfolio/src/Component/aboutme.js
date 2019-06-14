import React from 'react' ;
import '../App.css'

class Aboutme extends React.Component{
    render(){
        return <div>
              <div className="links">
                <button className="link0">
                        <a className="text" type="link" href="homepage.html"><h2>HOME</h2></a>
                </button>
                <button className="link1">
                        <a className="text"type="link" href="aboutme.html"><h2>About Me</h2></a>
                </button>
            
                <button className="link2">
                        <a className="text"type="link" href="myworks.html"><h2>My Works</h2></a>
                </button>
            
                <button className="link3">
                        <a className="text"type="link" href="Contactme.html"><h2>Contact Me</h2></a>
                </button>
            </div>
            <div>
          <img className="pic1" src="img/zaher.jpg" alt="zaher alnajjar" width="150px" height="150px"/>

      </div><br></br><br></br>
      
      <div>
          <p class="identification">
              Hello ! 
              My Name is <b>Mohammad Zaher Alnajjar</b>, I am from syria I am 28 years old 
              <br></br>
              I am <i>
                I am a student at Codi School</i>,
                <br></br>
                I learn how to be <u>Full Stuck Web Developer</u> </p> 
                
      </div><br></br><br></br>
      <div className="education">
          <p>
            <h2>Education</h2> 
            Computer Engineering<br></br>
            Damascus University<br></br>
I graduated with a score of 69.7, and my project was an automation parking, I got a degree of 92 in the project
</p>
        

      </div>
      <div className="Work">
          <p>
              <h2>
                    Work experience
              </h2>
              IT_support and maintenance<br></br>
              Cham Wings Airlines  &nbsp  &nbsp  &nbsp  &nbsp 2014/11/22 — 2015/10/15
          </p>

      </div>
      <div className="Qualifications">
          <p><h2>Qualifications</h2><br></br>
                * Microsoft Certified Solutions Exper 410<br></br>
                * Microsoft Office<br></br>
            * help desk & it support<br></br>
            </p>
      </div>
      <div className="button">
            <button class="link4">
                    <a className="text"type="link" href="homepage.html"><h2>Go back to homepage</h2></a>
                </button>
            
            
                <button className="link5">
                        <a className="text"type="link" href="myworks.html"><h2>Go to Next Page</h2></a>
                </button>
                </div>

      














            
        </div>
    }}
    export default Aboutme;