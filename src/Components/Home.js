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


// import React from "react";
// import About from "./About";

// const Home = ({ list }) => {
//   return (
//     <>
//     <div>
//       {list.map((item, index) => (
//         <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
//           <p><strong>Name:</strong> {item.name}</p>
//           <p><strong>Age:</strong> {item.age}</p>
//         </div>
//       ))}
//     </div>
//     <About message={list}></About>
//     </>

//   );
// };

// export default Home;


// import React from "react";
// import ExcelJS from "exceljs";
// import { saveAs } from "file-saver";

// const ExcelExport = () => {
//   const exportToExcel = async () => {
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("Sheet1");

//     // Add headers
//     worksheet.addRow(["ID", "Name", "Status"]);

//     // Define dropdown options
//     const ids = [1, 2, 3];
//     const names = ["John", "Doe", "Jane"];
//     const statuses = ["Active", "Inactive", "Pending"];

//     // Add dropdowns for ID, Name, and Status columns
//     for (let i = 2; i <= 100; i++) {
//       worksheet.getCell(`A${i}`).dataValidation = {
//         type: "list",
//         allowBlank: true,
//         formula1: ids.join(","),
//         showErrorMessage: true,
//         errorTitle: 'Invalid ID',
//         error: 'Please select an ID from the list.',
//       };

//       worksheet.getCell(`B${i}`).dataValidation = {
//         type: "list",
//         allowBlank: true,
//         formula1: `"${names.join(',')}"`,
//         showErrorMessage: true,
//         errorTitle: 'Invalid Name',
//         error: 'Please select a name from the list.',
//       };

//       worksheet.getCell(`C${i}`).dataValidation = {
//         type: "list",
//         allowBlank: true,
//         formula1: `"${statuses.join(',')}"`,
//         showErrorMessage: true,
//         errorTitle: 'Invalid Status',
//         error: 'Please select a status from the list.',
//       };
//     }

//     // Save the workbook
//     const buffer = await workbook.xlsx.writeBuffer();
//     const blob = new Blob([buffer], { type: "application/octet-stream" });
//     saveAs(blob, "Excel_with_Dropdowns.xlsx");
//   };

//   return (
//     <div>
//       <button onClick={exportToExcel}>Export to Excel with Dropdowns</button>
//     </div>
//   );
// };

// export default ExcelExport;


import React, { useContext } from 'react';
import { Context } from "../App";  // ✅ Import the exported Context

const Home = () => {
  const list = useContext(Context);

  return (
    <>
    <div>
      {list.map((p, index) => (
        <div key={index}>   {/* ✅ Added parentheses for implicit return */}
          <p>{p.firstname}</p>
          <p>{p.lastname}</p>
        </div>
      ))}
    </div>
    <h1>saikumar</h1>
    </>
  );
}

export default Home;
