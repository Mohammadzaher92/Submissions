import React from 'react' ;
import '../App.css'

class Home extends React.Component{
    render(){
        return <div>
            <div className="background">
            
            <div className="main-title">
      <h1>I am Zaher ALnajjar</h1>

      <div className="links">
    <button className="link0">
        <a className="text1" type="link" href="homepage.html"><h2>HOME</h2></a>
        </button>
        <br></br>
    <button className="link1">
            <a className="text" type="link" href="aboutme.html"><h2>About Me</h2></a>
    </button>

     <button className="link2">
            <a className="text"type="link" href="myworks.html"><h2>My Works</h2></a>
    </button>

    <button className="link3">
            <a className="text"type="link" href="Contactme.html"><h2>Contact Me</h2></a>
    </button>
    </div>
    </div>
    </div>
    
    
        </div>
    }
}

export default Home;