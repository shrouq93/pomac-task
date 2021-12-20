import React , {Component} from 'react' ;
class Parent extends Component {
    state =  {arr : 
        [
            {Key:1 , Id : 2022123 , Name:'Shrouq' , Age : 28, Email:"shrouq.28@gmail.com"},
            {Key:2 , Id : 2022124 , Name:'Osama' , Age : 27 , Email:"osama.27@gmail.com"},
            {Key:3 , Id : 2022125 , Name:'Amira' , Age : 29 , Email:"amria.29@gmail.com"}
         ]
        }
render(){
    return(
        <div>
             <Child trans={this.state.arr}/>
        </div> 
    )
}
}
class Child extends Component {
    render() {
       const recieve = this.props.trans ; 
      
        const res = recieve.map((index)=>{
            return (
                <tr key={index.Key}> 
                    <td> {index.Key}</td>
                    <td> {index.Id }</td>
                    <td> {index.Name} </td>
                    <td> {index.Age} </td>
                    <td> {index.Email }</td>
                </tr>
                    )
                }) 
        
        return (
            <table border="1px">
                 <thead>
                     <tr> 
                         <td>Key </td>
                         <td>Name</td>
                         <td>Age</td>
                         <td>Id</td>
                         <td>Email</td>
                     </tr>
                 </thead>
                 <tbody>
                 {res}
                 </tbody>
                
            </table>
        )
    }
}

export default Parent ;
