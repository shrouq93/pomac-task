import React , {Component} from 'react' ; 
import './Home.css' ;
import Navbar from '../Navbar/Navbar';
//import Content from '../Content/Content' ;
import NewColumn from '../NewColumn/NewColumn';
import NewTask from '../NewTask/NewTask';
import Avatar from '../../avatar.jpg' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import {faSearch} from "@fortawesome/fontawesome-free-solid";
//import{faEllipsisH} from "@fortawesome/fontawesome-free-solid";
 
import {BrowserRouter,NavLink} from 'react-router-dom' ;

class Home extends Component {
    constructor(props) {
        super(props) ;
      
        this.state = {
            columnstatus : "hide"    , 
            taskstatus : "hide"  
         
        }  
       
    }
    
    state = {
        columnstatus : "hide"    , 
        taskstatus : "hide"  
    }
    
    newColumn=(e)=>{
      
        e.preventDefault();

        var modal = document.getElementById("modal");
        modal.style.display = "block";

        var changeTaskStyle =document.getElementById("newtask");
        changeTaskStyle.disabled = false ;

      this.setState({
        columnstatus :"show" , 
        taskstatus : "hide"
      })

        document.getElementById("val").value = ""; 

        var changeColumnStyle =document.getElementById("newcolumn");
        changeColumnStyle.disabled = false ;

        if(window.newtasks.length ===  window.values.length) {
         
             var modal = document.getElementById("modal");
             modal.style.display = "none";

             
             var changeColumnStyle =document.getElementById("newcolumn");
             changeColumnStyle.disabled = true ;
             
        }
     
   }
   
    newTask=(e)=>{
        e.preventDefault();

        var modal2= document.getElementById("modal2");
        modal2.style.display = "block";
        this.setState({
            columnstatus : "hide"    , 
            taskstatus : "show"
        })
        document.getElementById("titleInput").value = ""; 
        document.getElementById("descriptionInput").value = ""; 
        document.getElementById("selectInput").value = ' '; 
        document.getElementById("dateInput").value = ' '; 
   

        document.getElementById("fileInp").value = ""; 

        var taskimg= document.getElementById("fileImage");
        taskimg.style.display = "none";
        
        var fileDiv = document.getElementById("fileDiv");
        fileDiv.style.display="none";


        var changeColumnStyle =document.getElementById("newcolumn");
        changeColumnStyle.disabled = false ;

        var changeTaskStyle =document.getElementById("newtask");
        if(window.newtasks.length> window.values.length) {
            // alert("you can't add more than one task to one column") ;
            var modal = document.getElementById("modal2");
            modal.style.display = "none";
            changeTaskStyle.disabled = true ;    
         }
      }
    render() {
       
         return(
             <div className="Home">  
                <Navbar/>
                <form className="search">
                    <input type="text" name="search" placeholder= "search" />
                    <button onClick={this.newTask} id="newtask">  + New Task </button>
                    <h1> Pomac Front End Technical Task  </h1> 
                    <button onClick={this.newColumn} id="newcolumn">  + New Column </button> 
                </form>
              <div className="searchIcon">   <FontAwesomeIcon icon={faSearch} />  </div>
              <BrowserRouter>
                <NavLink to="/profile" className="profile">
                    <img src={Avatar} alt="Avatar"  className="avatar" />
                    <span> Shrouq Ahmed  </span>  
                    <span> Admin </span>
                 </NavLink>
              </BrowserRouter>
              
               {/* <button> <FontAwesomeIcon icon={faEllipsisH}/> </button> */}
                <NewColumn columnstatus={this.state.columnstatus} id="content" />
                
                 
                 
                <NewTask taskstatus={this.state.taskstatus} />
                     
                
               
                 
               
            </div>
        ) 
    }
}
export default Home ;