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


// Child2.js
import React from 'react';

const About = ({ message }) => {
  return (
    <div>
      <h3>Child 2</h3>
      <p>{message}</p>
    </div>
  );
};

export default About;