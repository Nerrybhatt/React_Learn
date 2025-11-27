
// import Fun1 from "./html_jsx.jsx"
// import { Fun1,design,Fun3, PricingCard} from "./html_jsx.jsx"
// import Fun2 from "./html_jsx.jsx"
import IdCard from "./props.jsx"


const img="https://picsum.photos/id/237/200/300";

function App(){
          return (
            
            <IdCard imgs={img} name="Basudev Bhatta" post="Computer Expert" followers="4.5k" following={102}/>

          );
}


export default App;






// function App(){

//   return (
//     <div style={design.style}>
//       <Fun1/>
//       <Fun2/>
//       <Fun3/>
//       <PricingCard/>
//     </div>
//   );
// }

// export default App;