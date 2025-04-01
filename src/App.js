// import React from 'react'
// import About from  '../src/Components/About'
// const App = () => {
//   return (
//     <div>
//       <About/>
//     </div>
//   )
// }


// import React, { createContext} from 'react'
// import Home from './Components/Home';

// export const context=createContext();

// const App = () => {

//   let list =[
//     {
//       "name":"saikumar",
//       "age":23
//     },
//     {
//       "name":"reddy",
//       "age":23
//     }
//   ]

//   return (
//     <div>
//       <context.Provider value={list}>
//         <Home/>
//       </context.Provider>
//     </div>
//   )
// }

// export default App

// export default App
  // const initObj={
  //   firstName:"sai",
  //   lastName:"kumar",
  //   email:"saikuar@gmail.com"
    
  // };


//   const [firstName,setFirstName]=useState();
//   const[lastName,setLastName]=useState();
//   const[email,setEmail]=useState()
  
//   const changeFirstName=()=>{
//     setFirstName("saikumar")
//   }
//   const changeLastName=()=>{
//     setLastName("kumar")
//   }
//   const changeEmail=()=>{
//     setEmail("saikum@gmail.com")
//   }
//   return(
//     <div>
//       <input type='text' value={firstName} placeholder='firstname'></input>
//       <button onClick={changeFirstName}>changeName</button>
//       <input type='text' value={lastName} placeholder='lastname'></input>
//       <button onClick={changeLastName}>changeName</button>
//       <input type='text' value={email} placeholder='email'></input>
//       {/* <h1> my name is {data.firstName}</h1> */}
//       <button onClick={changeEmail}>changebutton</button>
//     </div>
//   )
// }


// const App=()=>{
  
//   const [count,setCount]=useState(10)


//   const increment=()=>{
//     setCount(count+1)
//   }
//     const decrement=()=>{
//       setCount(count-1);
//     }    
//   return(
//     <div>
 
//     <button onClick={decrement}>-</button>
//     <span>{count}</span>
//     <button onClick={increment}>+</button>
//     </div>
//   )
// }





// import React, { createContext } from "react";
// import Home from "./Components/Home";

// export const context=createContext();
// const App=()=>{
//   const list=[
//     {
//       "name":"saikumar",
//       "age":23
//     },
//     {
//       "name":"saik",
//       "age":23
//     }
//   ]
//   return(
//     <div>
//       <context.Provider value={list}>
//         <Home/>
//       </context.Provider>
//     </div>
//   )
// }

// export default App;


// import React from 'react'

// const App = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App

// const simpleArray=[1,'hello',true,{Key: 'value'}];
// const jsonArrayString=JSON.stringify(simpleArray);

// console.log('json from array:',jsonArrayString);

// let users = [
//   {
//     "name": "saikumar",
//     "age": 23
//   },
//   {
//     "name": "saik",
//     "age": 23
//   }
// ];

// let jsonString = JSON.stringify(users);  // Convert object to JSON string
// console.log("JSON String:", jsonString);

// let parsedUsers = JSON.parse(jsonString);  // Convert JSON string back to object
// console.log("Parsed Object:", parsedUsers);


// import React from "react";
// import Home from "./Components/Home";

// const App = () => {
//   const list = [
//     { name: "Saikumar", age: 23 },
//     { name: "Sai", age: 23 },
//     { name: "Krishna", age: 25 },
//   ];

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Users List</h2>
//       <Home list={list} />
//     </div>
//   );
// };

// export default App;


import React from 'react'
import About from "./Components/About";

const App = () => {
  return (
    <div>
      <About/>
    </div>
  )
}

export default App


// import React, { createContext } from 'react';
// import Home from "./Components/Home";

// export const Context = createContext();  // ✅ Export the context

// const App = () => {
//   const list = [
//     {
//       "firstname": "saikumar",
//       "lastname": "kumar"
//     }
//   ];

//   return (
//     <div>
//       <Context.Provider value={list}>  {/* Use the exported Context */}
//         <Home />
//       </Context.Provider>
//     </div>
//   );
// }

// export default App;


// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App


