import React from "react";

export default function Ragistration(props){
   let btnstyle={
    backgroundColor: "red",
    color:"white"
    
   }
   let buttontext;
   let changtype;

   if(props.showpassword=== true){
   changtype="text"
    buttontext="hide password"
    
   }
   else{
    buttontext="Show password"
     btnstyle.backgroundColor="green";
     changtype="password"
   }

    return(
      
            <form onSubmit={props.submit}>     
                <div className="maincopy">
                        <label htmlFor="Name">Name:</label><br/>
                        <input type="text" name="name" required/><br/>
                        <label htmlFor='email'>Email:</label>
              <input type="text" name="email"  required></input><br/>
              <label htmlFor="password">password:</label>
              <input type={changtype} name="password"  required></input><br/><br/>

              <button type="submit">Submit</button>
              <button type="button" style={btnstyle} onClick={props.click}>{buttontext}</button>

           
           
           <div></div>
           </div>
           </form>

        
    );
}

