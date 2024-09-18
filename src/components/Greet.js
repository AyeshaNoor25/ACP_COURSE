import React  from 'react';
 const Greet = (props) => 
     {
    return (
   
    <>
       <h1> this is heading {props.number}</h1> 
       <p> this is paragraph {props.name}</p>
       <p> this is another para with {props.children}</p>
       
       </>
    )
 }


export default Greet;