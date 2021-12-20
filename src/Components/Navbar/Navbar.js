import React , {Component} from 'react' ; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import {faArchive ,faCube ,faCalendar} from "@fortawesome/fontawesome-free-solid";
import {BrowserRouter,NavLink} from 'react-router-dom' ;
import './Navbar.css' ;

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar" > 
            <div className="sidenav">
                <BrowserRouter>
                    <NavLink to="/" className="logo">  <p> POMAC <span> power of marketing & conding </span> </p>  </NavLink>
                    <NavLink to="/archive">  <FontAwesomeIcon icon={faArchive} /> </NavLink>
                    <NavLink to="/details"> <FontAwesomeIcon icon={faCube} /> </NavLink>
                    <NavLink to="/calender"> <FontAwesomeIcon icon={faCalendar} /> </NavLink>
                </BrowserRouter>
             </div>
            </div>
        )
    }
}

export default Navbar ;