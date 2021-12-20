import React , {Component } from 'react' ;
import './NewTask.css' ; 

window.newtasks = [{title : ' ' ,description : ' ' ,date : ' ' ,opt : ' ' ,fileInp : '' , id:''}] ;
 

class NewTask extends Component {
    constructor(props){
    super(props) ;
    this.state = {
        title : ' ' ,
        description : ' ' ,
        date : ' ' ,
        opt : ' ' ,
        fileInp : '' , 
        id :''
       }
    }

    state = {
        title : ' ' ,
        description : ' ' ,
        date : ' ' ,
        opt : ' ' ,
        fileInp : '' ,
        id : ''
    }

    changeTitle=(e)=>
    {   
        this.setState({
           title: e.target.value ,
           }) 
      //   console.log(this.state.title) ;
     } 

     changeDescription=(e)=>
     {
        this.setState({
            description : e.target.value  
            })
       //  console.log(this.state.description) ;    
     }

    changeDate=(e)=> {
        this.setState({
            date : e.target.value  
            })
        // console.log(this.state.date) ;   
    }

    changeSelect=(e)=> {
        this.setState({
            opt : e.target.value  
            })

            
       //  console.log(this.state.opt) ; 
    }
    
    handleFile=(e)=>{
        var fileInp = document.getElementById("fileInp") ;
        var fileImage = document.getElementById("fileImage");
        const [file] = fileInp.files ;
            if (file) {
                fileImage.src = URL.createObjectURL(file) ;
            }
            fileImage.style.display = "inline";
          
            this.setState({
                fileInp :fileImage.src
                })
                var fileDiv = document.getElementById("fileDiv");
                fileDiv.style.display="block";
                
            
    }
    taskSubmit=(e)=> {
     e.preventDefault() ;
    //  close_btn1
      this.setState({id: window.values.length}) ;
      var determineTask =window.values.length ;
      var btn_id = "btn_Id" +determineTask ;


    var delete_whole_task=("close_btn").concat(determineTask);
    var showbtn=document.getElementById(delete_whole_task) ;
    showbtn.style.display="inline" ; 

    var modal = document.getElementById("modal2");
    modal.style.display = "none";

    var upBTN =document.getElementById("updateBTN") ;
    upBTN.style.display ="none" ;

    var subBTN =document.getElementById("subBTN");
    subBTN.style.display="inline" ;
   
    var row = document.getElementById("row"); 
       var content2 =row.lastElementChild;
      content2.style.display = "block";

  // file input    
    var Img = document.createElement('img') ;
     Img.src=this.state.fileInp ;
     Img.classList.add("taskImg");
     
    if(document.getElementById("fileInp").value !="") {
        Img.style.display = "block";
     }
     else{
        Img.style.display = "none";
     }
     
  //title
    var title = document.createElement('h4');
    title.textContent = this.state.title ;
// edit button
    var task_btn = document.createElement('button') ; 
    task_btn.type = 'button';
    task_btn.classList.add("task_btn") ;
    task_btn.setAttribute("id",  btn_id) ;
    task_btn.innerHTML = "x" ; 
 
    task_btn.onclick=function(e){
        var modal = document.getElementById("modal2");
        modal.style.display = "block";
       
        var upBTN =document.getElementById("updateBTN") ;
        upBTN.style.display ="inline" ;

        var subBTN =document.getElementById("subBTN");
        subBTN.style.display="none" ;
       
       var task_btn_id = e.target.id;
       var col_index = task_btn_id.charAt(task_btn_id.length-1) ;
      // console.log("show data of model") ;
      
        window.newtasks[col_index].title =  title.textContent  ;
        window.newtasks[col_index].description = description.textContent ;
        window.newtasks[col_index].opt= opt.textContent  ; 
        window.newtasks[col_index].date= date.textContent  ; 
        window.newtasks[col_index].Img=  Img.src ; 
     

    document.getElementById("titleInput").value=  window.newtasks[col_index].title ;
    document.getElementById("descriptionInput").value=  window.newtasks[col_index].description ;
    document.getElementById("selectInput").option=  window.newtasks[col_index].opt ;
    document.getElementById("dateInput").value=  window.newtasks[col_index].date ;
    document.getElementById("fileImage").src = window.newtasks[col_index].Img  ;
   
   
    var hiddenInput = document.querySelector("[type='hidden']");
    hiddenInput.setAttribute("id" , col_index) ; 
    hiddenInput.value=col_index;

      };
 
    
    var title_btn_task = document.createElement("div"); 
    title_btn_task.classList.add("title_btn_task");
    title_btn_task.appendChild(title) ; 
    title_btn_task.appendChild(task_btn) ;

   // description 
    var description = document.createElement('p');
    description.textContent = this.state.description ;
   //  date
    var  date = document.createElement('span');
    date.textContent = this.state.date ;
    var dtInput =document.getElementById("dateInput") ; 
    if (dtInput.value==' ') {
        date.style.display="none";
       }
       else {
        date.style.display="inline";
       }
// select user
  var  opt = document.createElement('img');
   
   var slctInput = document.getElementById("selectInput");
   if (slctInput.value==' ') {
    opt.style.display="none";
   }
   else {
    opt.style.display="inline";
   }

   if(slctInput.value=='Ahmed') {
    opt.setAttribute("src" ,"https://gravatar.com/avatar/91d25bd0f6700c87f009374f65c4c708?s=400&d=robohash&r=x") ;
    opt.style.backgroundColor="yellow" ;
   }
   else if (slctInput.value=='Alaa'){
    opt.setAttribute("src" ,"https://robohash.org/4f3da843fa1bfb4fc35f3ef0031b730e?set=set4&bgset=&size=400x400") ;
    opt.style.backgroundColor="#bde5ed" ;
    }
   else{
    opt.setAttribute("src" ,"https://robohash.org/8316b0c788654fa08b915fb193567927?set=set2&bgset=&size=400x400") ;
    opt.style.backgroundColor="pink" ;
   }
   opt.classList.add("opt_img") ;

   var bottom_task = document.createElement("div"); 
    bottom_task.classList.add("bottom_task") ;
    bottom_task.appendChild(date);
    bottom_task.appendChild(opt);
    var tasks = document.createElement('li');
     tasks.classList.add("tasks2");
  
     var tasks2= "tasks2_" +determineTask;
     tasks.setAttribute("id",tasks2);
     tasks.style.display = "block";
   
    tasks.appendChild(Img) ;
    tasks.appendChild(title_btn_task );
    tasks.appendChild(description) ;
    tasks.appendChild(bottom_task) ;
    content2.appendChild(tasks);

 
    window.newtasks.push(this.state) ;
   
  
   
 }

 handleUpdate=()=>{
    var determineTask =window.values.length ;
    var btn_id = "btn_Id" +determineTask ;

   var modal = document.getElementById("modal2");
    modal.style.display = "none";

    var upBTN =document.getElementById("updateBTN") ;
    upBTN.style.display ="none" ;

    var subBTN =document.getElementById("subBTN");
    subBTN.style.display="inline" ;
     
    var hiddenInput = document.querySelector("[type='hidden']");
    var get_Index = hiddenInput.value ;
     
    var old_index =("tasks2_").concat(get_Index);
    var old_task = document.getElementById(old_index) ;
    old_task.remove() ;
    
    var current_content =("contentID").concat(get_Index) ;
    var update_content = document.getElementById(current_content) ;


     // here we will do the same +newtask design 

     //input file
    var Img = document.createElement('img') ;
     Img.src=this.state.fileInp ;
     Img.classList.add("taskImg");
     
    if(document.getElementById("fileInp").value !="") {
        Img.style.display = "block";
     }
     else{
        Img.style.display = "none";
     }
     //title
     var title = document.createElement('h4');
    title.textContent = this.state.title ;
 
    
     // desciption
      var description = document.createElement('p');
    description.textContent = this.state.description ;
     
     // date
    var  date = document.createElement('span');
    date.textContent = this.state.date ;
    var dtInput =document.getElementById("dateInput") ; 
    if (dtInput.value==' ') {
        date.style.display="none";
       }
       else {
        date.style.display="inline";
       }
   // option 
   var  opt = document.createElement('img');
   
   var slctInput = document.getElementById("selectInput");
   if (slctInput.value==' ') {
    opt.style.display="none";
   }
   else {
    opt.style.display="inline";
   }

   if(slctInput.value=='Ahmed') {
    opt.setAttribute("src" ,"https://gravatar.com/avatar/91d25bd0f6700c87f009374f65c4c708?s=400&d=robohash&r=x") ;
    opt.style.backgroundColor="yellow" ;
   }
   else if (slctInput.value=='Alaa'){
    opt.setAttribute("src" ,"https://robohash.org/4f3da843fa1bfb4fc35f3ef0031b730e?set=set4&bgset=&size=400x400") ;
    opt.style.backgroundColor="#bde5ed" ;
    }
   else{
    opt.setAttribute("src" ,"https://robohash.org/8316b0c788654fa08b915fb193567927?set=set2&bgset=&size=400x400") ;
    opt.style.backgroundColor="pink" ;
   }
   opt.classList.add("opt_img") ;

   var bottom_task = document.createElement("div"); 
    bottom_task.classList.add("bottom_task") ;
    bottom_task.appendChild(date);
    bottom_task.appendChild(opt);
    

    var newtask = document.createElement('li') ;
    var newtaskId =("tasks2_").concat(get_Index);
    newtask.setAttribute("id",newtaskId);
    newtask.classList.add("updatedTasks") ;

    newtask.appendChild(Img) ;
    newtask.appendChild(title) ;
    newtask.appendChild(description);
    newtask.appendChild(bottom_task) ;
    update_content.appendChild(newtask) ;
    
 }

    taskClose=()=>{
        var modal = document.getElementById("modal2");
        modal.style.display = "none";
        this.setState({
                title : ' ' ,
                description : ' ' ,
                date : ' ' ,
                opt : ' ' 
         })
      }
 
    render() {
      
    
        return (
         <div>
 {/* titleInput  descriptionInput selectInput dateInput fileInp */}
            <div id="modal2">
               <div className={this.props.taskstatus} id="overlay">
                    <form className={this.props.taskstatus} id="taskModal" onSubmit={this.taskSubmit}> 
                    <h4>New Task</h4>

                    <label >Title</label><br/>
                    <input type="text"  placeholder="Enter Title" onChange={this.changeTitle} id="titleInput" required/> <br/>
                    <span className="error" id="errorInput"> * This is a required field </span><br/>

                    <label >Description</label><br/>
                    <textarea placeholder="Enter Description"   onBlur={this.changeDescription} id="descriptionInput" required /> <br/>
                    <span className="error" id="errorDescription"> * This is a required field </span><br/>

                    <label >Select User</label><br/>
                    <select size="1" onChange={this.changeSelect}   id="selectInput"  >
                        {/* <option value=" " >  </option> */}
                        <option value="Ahmed" > Ahmed </option>
                        <option value="Alaa" > Alaa</option>
                        <option value="Yasmine" > Yasmine </option>
                        <option value="Menna" > Menna </option>
                    </select>  <br/> <br/>
                    
                     
                    <label >Date</label><br/>
                    <input type="date" onChange={this.changeDate} id="dateInput"/><br/> <br/>
                   
                    <label className="fileLabel"> Select Image   
                    <input accept="image/*" type='file' id="fileInp" style={{visibility:"hidden"}} onChange={this.handleFile} />
                    </label>  

                    <div className="fileImg" id="fileDiv">
                     <img id="fileImage" src="#" alt="your image" />  
                    </div> 
                    

                    <input type="hidden" />
                    <div className="taskbtns" id="taskbtns"> 
                    <input type="button" onClick={this.taskClose} value="Close"/>
                    <input type="submit" id="subBTN" />
                    <input type="button" value="Update" onClick={this.handleUpdate} id="updateBTN"/>
                  
                    </div>
                   
                    </form>
                  </div>  
            </div>
           
        </div>
            
        )
    }
}

export default NewTask;