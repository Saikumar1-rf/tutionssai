import React from "react";
import { useNavigate } from "react-router-dom";

function TeacherCreation() {
    const navigate = useNavigate();

  // Sample data (replace with dynamic data from an API or database)
  const teachers = [
    {
      id: 1,
      teacherId: "T001",
      name: "John Doe",
      email: "mailto:john.doe@example.com",
      branchCode: "B001",
      designation: "Math Teacher",
      status: "Active",
    },
    {
      id: 2,
      teacherId: "T002",
      name: "Jane Smith",
      email: "mailto:jane.smith@example.com",
      branchCode: "B002",
      designation: "Science Teacher",
      status: "Inactive",
    },
    // Add more teachers as needed
  ];

  return (
    <div className="container mx-auto p-6 bg-custom-blue-light">
      <h1 className="text-3xl font-semibold mb-6">List of Teachers</h1>

      
      <div className="flex justify-end mb-4 space-x-4 mt-4">
        <button
          className="flex items-center justify-center px-2 py-1 border-2 bg-custom-blue-dark rounded-md w-32 sm:w-40"
          onClick={() => navigate("/TeachersList")}
        >
          <span className=" font-semibold">Sample Data</span>
        </button>
        <button
          className="flex items-center justify-center px-2 py-1 border-2 bg-custom-blue-dark rounded-md w-32 sm:w-40"
        >
          <span className=" font-semibold">Upload Data</span>
        </button>
        <button
          className="flex items-center justify-center px-2 py-1 border-2 bg-custom-blue-dark rounded-md w-32 sm:w-40"
        >
<span
        className="font-semibold cursor-pointer"
        onClick={() => navigate("/createteacherprofile")}
      >
        New Teacher
      </span>        </button>
      </div>

     
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">S.No</th>
              <th className="px-4 py-2 border-b text-left">Teacher ID</th>
              <th className="px-4 py-2 border-b text-left">Teacher Name</th>
              <th className="px-4 py-2 border-b text-left">Email ID</th>
              <th className="px-4 py-2 border-b text-left">Branch Code</th>
              <th className="px-4 py-2 border-b text-left">Designation</th>
              <th className="px-4 py-2 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={teacher.id}>
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{teacher.teacherId}</td>
                <td className="px-4 py-2 border-b">{teacher.name}</td>
                <td className="px-4 py-2 border-b">{teacher.email}</td>
                <td className="px-4 py-2 border-b">{teacher.branchCode}</td>
                <td className="px-4 py-2 border-b">{teacher.designation}</td>
                <td className="px-4 py-2 border-b">{teacher.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeacherCreation;
