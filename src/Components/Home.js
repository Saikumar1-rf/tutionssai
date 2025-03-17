// import React from 'react'
// import Props from './Props'

// const list=[
//   {
//     id:1,
//     name:"saikumar"
//   },{
//     id:2,
//     name:"sai"
//   },
//   {
//     id:3,
//     name:"saikumar reddy"
//   },{
//     id:4,
//     name:"reddy saikumar"
//   }
// ]

// const Home = () => {
//   return (
//     <div>
//       {
//         list.map((p)=>{
//           return <Props key={p.id} id={p.id} name={p.name} />;
//         })
//       }
//     </div>
//   )
// }

// export default Home

// import React, { useContext } from 'react'
// import { context } from '../App'

// const Home = () => {

//   const list=useContext(context)

//   return (
//     <div>
//         {
//           list.map((user,index)=>(
//             <div key={index}>
//                 <p>name:{user.name}</p>
//                 <p>age:{user.age}</p>
//             </div>
//           ))
//         }
//     </div>
//   )
// }

// export default Home

// import React, { useContext } from 'react';
// import { context } from '../App';

// const Home = () => {
//   const list = useContext(context);

//   return (
//     <div>
//       {list.map((user, index) => (
//         <div key={index}>
//           <p>name: {user.name}</p>
//           <p>age: {user.age}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;


// import React, { useContext } from "react";
// import { context } from "../App";

// const Home=()=>{

// const list=useContext(context)
//   return(
//     <div>
//     {
//       list.map((user,index)=>{
//         <div key={index}>
//           <p>username:{user.name}</p>
//           <p>age:{user.age}</p>
//         </div>
//       })
//     }
//     </div>
//   )
// }
// export default Home


import React from "react";

const Home = ({ list }) => {
  return (
    <div>
      {list.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Age:</strong> {item.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
