import React , {Component , Fragment} from 'react' ;
import './NewColumn.css' ;
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import {fa,faEllipsisH} from "@fortawesome/fontawesome-free-solid";
window.values = []; 
 
class NewColumn extends Component {
constructor(props){
super(props) ;
this.state={
    columnname : null ,
    status : "appear" , 
 }
}
    state={
        columnname : null ,
        status : "appear" , 
     }
     changeInput=(e)=>
    {   
        this.setState({
            columnname : e.target.value ,
           
           }) 
     }  
    handleSubmit = (e) => {
        e.preventDefault();
        var determineTask =window.values.length ;
      
        var contentID= "contentID" + (determineTask +1 );

        var modal = document.getElementById("modal");
         modal.style.display = "none";
 
       var row  = document.getElementById("row");
      
       row.classList.add("myrow") ;
       var content  = document.createElement("ul");
       content.classList.add("content") ;
       content.setAttribute('id' , contentID);
   
       content.style.display = "block";

        var coltasks = document.createElement('li');
        coltasks.classList.add("tasks");
        coltasks.style.display = "block";
 

        var determineCloseButton =window.values.length ;
        var close_column = "close_btn" + (determineCloseButton +1) ;

        var btn = document.createElement('button');
          btn.classList.add("btn-close");
          btn.innerHTML="x";
       // var iTag = document.createElement("i") ; 
       // btn.appendChild(iTag) ;
         // btn.value= <FontAwesomeIcon icon={faEllipsisH}/> ;
          // btn-close <FontAwesomeIcon icon={faEllipsisH}/> ;
       // iTag.insertAdjacentHTML("afterend", <FontAwesomeIcon icon={faEllipsisH}/>);

      //  btn.innerHTML =<FontAwesomeIcon icon= {fa,faEllipsisH}/>;
 


        // document.getElementById("add_to_me").innerHTML += 
        // "<h3>This is the text which has been inserted by JS</h3>";

        btn.setAttribute("id",close_column);
        btn.onclick = function(e){
            var tgt = e.target;
            tgt.parentNode.parentNode.remove();
            
          };
       
        var head = document.createElement('h1');
        head.setAttribute("id","head");
        head.textContent = this.state.columnname ;
        coltasks.appendChild(head);

        coltasks.appendChild(btn);
         content.appendChild(coltasks);
         row.appendChild(content) ;


         var inputval= document.getElementById("val");
         if (inputval.value==null || inputval.value==""){  
            modal.style.display = "block";
            content.style.display = "none";
          }


          var inp = document.getElementById('val');
          window.values.push(inp.value);
        //  console.log( "values : "+ window.values);
          inp.value = "";  
         
     } 

     newCloumnClose=()=>{
        var modal = document.getElementById("modal");
        modal.style.display = "none";
     }
   
     
    render() { 
     
         
         return (
          
        <div id="row"> 
            <div id="modal"> 
            
                <div className= { this.props.columnstatus}  id="overlay">
                <form name="contact-form" className= { this.props.columnstatus}  id="columnModal" onSubmit={this.handleSubmit}>
                    <h4>New Column</h4>
                    <label >Title</label><br/>
                    <input type="text"  placeholder="Enter Title" onChange={this.changeInput} id="val" required/> <br/>
                    <span className="error"> * This is a required field </span><br/>

                    <input type="button" onClick={this.newCloumnClose} value="Close"/>
                    <input type="submit"/>
                  
                  
                </form>
                 
                </div>
              </div>
              
                  
           
           </div>
       
        )
        
    }
    
}
 
export default NewColumn;