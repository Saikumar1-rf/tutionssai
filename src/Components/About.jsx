// import React, { useEffect, useState } from 'react';

// const About = () => {
//   const [formdata, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     gender: ''
//   });
//   const [error, setError] = useState({});

//   const validateForm = () => {
//     let errors = {};
//     let isValid = true;

//     if (!formdata.firstname.trim()) {
//       errors.firstname = "Firstname is required";
//       isValid = false;
//     }
//     if (!formdata.lastname.trim()) {
//       errors.lastname = "Lastname is required";
//       isValid = false;
//     }
//     if (!formdata.gender.trim()) {
//       errors.gender = "Gender is required";
//       isValid = false;
//     }

//     setError(errors); // Setting error state
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     console.log(formdata);
//     setFormData({
//       firstname: '',
//       lastname: '',
//       gender: ''
//     });
//     setError({});
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formdata, [name]: value });

//     if(error[name]){
//         setError({ ...error,[name]:''});
//     }
//   };

//   useEffect(()=>{
//     handleSubmit();
//   },[])

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           firstname:
//           <input
//             type='text'
//             name='firstname'
//             value={formdata.firstname}
//             onChange={handleChange}
//           />
//           {error.firstname && <p style={{ color: 'red' }}>{error.firstname}</p>}
//         </div>
//         <div>
//           lastname:
//           <input
//             type='text'
//             name='lastname'
//             value={formdata.lastname}
//             onChange={handleChange}
//           />
//           {error.lastname && <p style={{ color: 'red' }}>{error.lastname}</p>}
//         </div>
//         <div>
//           gender:
//           <input
//             type='text'
//             name='gender'
//             value={formdata.gender}
//             onChange={handleChange}
//           />
//           {error.gender && <p style={{ color: 'red' }}>{error.gender}</p>}
//         </div>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default About;


// import React from 'react'

// const About = ({message}) => {
//   return (
//     <div>
//        {
//         message.map((p,index)=>{
//             <div key={index}>
//                 <p>{p.name}</p>
//                 <p>{p.age}</p>
//             </div>
//         })
//        }
//     </div>
//   )
// }

// export default About

// import React from "react";
// import ExcelJS from "exceljs";
// import { saveAs } from "file-saver";

// const ExcelExport = () => {
//   const exportToExcel = async () => {
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("MainData");
//     const dropdownSheet = workbook.addWorksheet("DropdownData");

//     // Define headers for the main sheet
//     worksheet.addRow(["ID", "Name", "Status"]);

//     // Dropdown data
//     const ids = [1, 2, 3];
//     const names = ["John", "Doe", "Jane"];
//     const statuses = ["Active", "Inactive", "Pending"];

//     // Insert dropdown values in the 'DropdownData' sheet
//     dropdownSheet.getCell("A1").value = "ID Options";
//     ids.forEach((id, index) => dropdownSheet.getCell(`A${index + 2}`).value = id);

//     dropdownSheet.getCell("B1").value = "Name Options";
//     names.forEach((name, index) => dropdownSheet.getCell(`B${index + 2}`).value = name);

//     dropdownSheet.getCell("C1").value = "Status Options";
//     statuses.forEach((status, index) => dropdownSheet.getCell(`C${index + 2}`).value = status);

//     // Apply dropdowns dynamically in the MainData sheet
//     for (let i = 2; i <= 100; i++) {
//       worksheet.getCell(`A${i}`).dataValidation = {
//         type: "list",
//         allowBlank: true,
//         formula1: `DropdownData!$A$2:$A$${ids.length + 1}`,
//         showDropDown: true,
//         errorTitle: "Invalid ID",
//         error: "Select a valid ID from the list."
//       };

//       worksheet.getCell(`B${i}`).dataValidation = {
//         type: "list",
//         allowBlank: true,
//         formula1: `DropdownData!$B$2:$B$${names.length + 1}`,
//         showDropDown: true,
//         errorTitle: "Invalid Name",
//         error: "Select a valid Name from the list."
//       };

//       worksheet.getCell(`C${i}`).dataValidation = {
//         type: "list",
//         allowBlank: true,
//         formula1: `DropdownData!$C$2:$C$${statuses.length + 1}`,
//         showDropDown: true,
//         errorTitle: "Invalid Status",
//         error: "Select a valid Status from the list."
//       };
//     }

//     // Generate and download the Excel file
//     const buffer = await workbook.xlsx.writeBuffer();
//     const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
//     saveAs(blob, "Excel_with_Dropdowns.xlsx");
//   };

//   return (
//     <div>
//       <button onClick={exportToExcel}>Export to Excel with Dropdowns</button>
//     </div>
//   );
// };

// export default ExcelExport;


// import React, { useEffect, useState } from "react"; // Ensure React and hooks are imported
// import ExcelJS from "exceljs"; // Import ExcelJS for Excel operations
// import { saveAs } from "file-saver"; // Import file-saver for downloading files
// import { toast } from "react-toastify"; // Import toast for notifications


// const YourComponent = () => {
//   const [branchCodes, setBranchCodes] = useState([]); // State to hold branch codes

//   useEffect(() => {
//     const fetchBranchCodes = async () => {
//       try {
//         const response = await axios.get("https://hrms-application-2dkk.onrender.com/hrmsapplication/branchDetails/getAllBranchCodes");
//         setBranchCodes(response.data.data); // Update state with fetched branch codes
//         console.log("branchcodes", response.data.data);
//       } catch (error) {
//         console.error("Error fetching branch codes:", error);
//         const errorMessage = error.response?.data?.data?.message || "Failed to fetch branch codes. Please try again.";
//         toast.error(errorMessage); // Show error message
//       }
//     };
//     fetchBranchCodes();
//   }, []); 

//   const exportSampleFormatToExcel = async () => {
//     const labels = [
//       'First Name', 'Middle Name', 'Last Name', 'Father Name', 'Mother Name',
//       'Gender', 'Date of Birth', 'Country Code', 'Phone Number', 'Blood Group',
//       'Aadhar', 'Date of Joining', 'Branch Code', 'Active', 'Parent Email', 'Class Name',
//       'Roll Number', 'Academic Year', 'Section', 'Admission Number', 'Joined Academic Year',
//       'Joined Class'
//     ];

//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('SampleFormat');

//     // Add column headers
//     worksheet.addRow(labels);

//     // Create rows for each branch code
//     const data = branchCodes.map((branchCode) => {
//       const row = labels.reduce((acc, label) => {
//         acc[label] = ''; // Initialize empty entries
//         return acc;
//       }, {});
//       row['Branch Code'] = branchCode; // Set the Branch Code
//       return row;
//     });

//     // Add the data rows to the worksheet
//     data.forEach((rowData) => {
//       worksheet.addRow(rowData);
//     });

//     // Set dropdown validation for the Branch Code column
//     const branchCodeColumnIndex = labels.indexOf('Branch Code') + 1; // ExcelJS columns are 1-indexed

//     worksheet.getColumn(branchCodeColumnIndex).eachCell({ includeEmpty: true }).forEach((cell, rowNumber) => {
//       if (rowNumber > 1) { // Skip header row
//         cell.dataValidation = {
//           type: 'list',
//           allowBlank: true,
//           formula1: `"${branchCodes.join(',')}"`, // Dropdown options
//           showErrorMessage: true,
//           errorTitle: 'Invalid input',
//           error: 'Please select a valid Branch Code from the dropdown.'
//         };
//       }
//     });

//     // Write the workbook to a buffer and save
//     const buffer = await workbook.xlsx.writeBuffer();
//     const file = new Blob([buffer], { type: 'application/octet-stream' });
//     saveAs(file, 'SampleFormat.xlsx');
//   };

//   return (
//     <div>
//       <button
//         onClick={exportSampleFormatToExcel}
//         className="hover:bg-black flex items-center justify-center px-6 py-2 border-2 bg-custom-blue-dark rounded-md "
//       >
//         <span className="text-white font-semibold">Sample Format</span>
//       </button>
//     </div>
//   );
// };

// export default YourComponent;

import React from 'react';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

const ExcelExport = () => {
  const branchCodes = ['Branch1', 'Branch2', 'Branch3', 'Branch4', 'Branch5'];

  const createExcelFile = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    // Add header
    worksheet.getCell('A1').value = 'Branch Code';

    // Apply dropdown to the "Branch Code" column
    for (let i = 2; i <= 100; i++) {
      worksheet.getCell(`A${i}`).dataValidation = {
        type: 'list',
        allowBlank: true,
        formulae: [`"${branchCodes.join(',')}"`],
        showDropDown: true
      };
    }

    // Generate Excel file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    saveAs(blob, 'branch-code-matching.xlsx');
  };

  return (
    <button onClick={createExcelFile}>
      Download Excel
    </button>
  );
};

export default ExcelExport;