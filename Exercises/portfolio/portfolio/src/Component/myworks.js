import React from 'react' ;
import '../App.css'

class myworks extends React.Component{
    render(){
        return <div>
            <div className="links">
                <button className="link0">
                        <a className="text" type="link" href="homepage.html"><h2>HOME</h2></a>
                </button>
                <button className="link1">
                        <a class="text"type="link" href="aboutme.html"><h2>About Me</h2></a>
                </button>
            
                <button class="link2">
                        <a class="text"type="link" href="myworks.html"><h2>My Works</h2></a>
                </button>
            
                <button class="link3">
                        <a class="text"type="link" href="Contactme.html"><h2>Contact Me</h2></a>
                </button>
            </div>
      
      <div className="myworks">
          
          
          <h1>My works</h1>
      </div>
      <div className="myfirstproject">
            <img className="pic2" src='../src/assets/WORK.png' alt="WORK" width="100%" height="150%" />

          <p>
              <h1>here you can see my first website</h1>
              <a href="web/index.html"><h3>click here</h3></a>
          </p>

      </div>

      <div className="buttonw">
            <button class="link6">
                    <a className="text"type="link" href="homepage.html"><h2>Go back to homepage</h2></a>
                </button>
            
            
                <button className="link7">
                        <a className="text"type="link" href="Contactme.html"><h2>Go to Next Page</h2></a>
                </button>
                </div>


</div>
}
}

export default myworks ;
