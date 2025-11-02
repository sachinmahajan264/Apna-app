import React, {Component} from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            name:null,
            contry:null,
        }
        
    }
    submitdata=(event)=>{
        event.preventDefault();
        console.log(this.state)
       let name= console.log(event.target.name.value);
       let contry=console.log(event.target.contry.value);
                    this.setState({name,contry} , ()=>{
                        console.log(this.state);

                    });
                    
  
    }


//   onkeyUpp=(event)=>{
//     event.preventDefault();
//     console.log(event.target.value)
//   }
//   selectt=(event)=>{
//     console.log(event.target.value)
//   }

    render(){
      
        return(
            <>
            <form onSubmit={this.submitdata}>
        <div> < label htmlFor="">Name:</label>
          <input type="tecxt" onKeyUp={this.onkeyUpp} name="name"/></div>
        <div> <label htmlFor="">Contry:</label>
         <select  onChange={this.selectt} name="contry">
            <option>Amerika</option>
            <option>India</option>
            <option>Chin</option>
            <option>Japan</option>
         </select>
         </div>
         <button type="submit">submit</button>
         
            </form>
            </>
        )
    }
}

export default Form;