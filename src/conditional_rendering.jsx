
//if/else statement 
export function ConditionalRendering(props){

             if(props.isLogedIn){
                 return  <h1>Welcome {props.username}</h1>
             } else{
                return <h1>Please first login the page!</h1>
             }
} 


// Ternary operator
export function ConditionalRendering2( props ){

    return ( props.isLogedIn ? <h1>Welcome {props.username}</h1> : <h1>Please first login the page!</h1> )
    
} 

