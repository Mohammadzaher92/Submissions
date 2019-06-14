import React from 'react';
import '../App.css'

class Contactme extends React.Component {
    render() {
        return <div>

            <div className="links">
                <button className="link0">
                    <a className="text" type="link" href="homepage.html"><h2>HOME</h2></a>
                </button>
                <button className="link1">
                    <a className="text" type="link" href="aboutme.html"><h2>About Me</h2></a>
                </button>

                <button className="link2">
                    <a className="text" type="link" href="myworks.html"><h2>My Works</h2></a>
                </button>

                <button className="link3">
                    <a className="text" type="link" href="Contactme.html"><h2>Contact Me</h2></a>
                </button>
            </div>
            <div className="mycontact">
                <h2>Contact Me</h2>
            </div>

            <div className="contact">
                <li>Github: Mohammadzaher92</li>
                <li>Facebook: Zaher Alnajjar</li>
                <li>Phone: +961-76756828</li>
                <li>Email: itzaher92@gmail.com</li>
            </div><br></br><br></br>
            <div className="manu">
                <form>
                    <label>Firstname</label>
                    <input type="text" name="Firstname" />

                    <label>Lastname</label><input type="text" name="Lastname" />
                    <br>
                    </br>
                    <br>
                    </br>
                    <label>Email </label>
                    <input type="email" name="email">
                    <label>Message </label> <textarea name="Message"></textarea></input>
                    </form>
                    </div>
                <br></br>
                <div className="cont">
                    <button className="link8">
                        <a className="text" type="link" href="homepage.html"><h2>Go back to homepage</h2></a>
                    </button>
                </div>
            </div>
        
    }
}
export default Contactme;

