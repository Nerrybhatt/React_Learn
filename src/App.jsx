
// import Fun1 from "./html_jsx.jsx"
// import { Fun1,design,Fun3, PricingCard} from "./html_jsx.jsx"
// import Fun2 from "./html_jsx.jsx"
//import {IdCard} from "./props.jsx"
//import {PropsArray,PropsArray2} from "./props1.jsx"
import { ConditionalRendering ,ConditionalRendering2 } from "./conditional_rendering.jsx";

const img="https://picsum.photos/id/237/200/300";

function App(){
  return(
    <ConditionalRendering isLogedIn={true} username="Naresh Bhatta" />,
    <ConditionalRendering2  isLogedIn={true} username="Naresh Bhatta"/>
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


// Props detailed object, array, image passing......
// function App(){

//         const number=[12,13,16,72,62];
//         const fruits=['Apple','banana','orange','gava'];
//         const info={
//                       name:"Ram",
//                       age: 20,
//                       address:"Kathmandu",
//                       number: 98043030033
//                     }
//           return (
//             <div>
//             <IdCard imgs={img} name="Basudev Bhatta" post="Computer Expert" followers="4.5k" following={102}/>,
//                   <PropsArray  num={number} fruit={fruits}/>     
//                   <PropsArray2  infos={info} />       
//             </div>
//           );
// }