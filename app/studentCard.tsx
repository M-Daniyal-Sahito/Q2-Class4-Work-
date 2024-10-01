import React from 'react';

interface StudentProps {
  name: string;
  age: number;
  rollNo: number;
  studentClass: string;
}

const StudentCard = ({ name, age, rollNo, studentClass }: StudentProps) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg text-center max-w-sm mx-auto my-10 border-2 border-black">
      <h2 className="text-2xl font-bold text-blue-600">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">Roll No: {rollNo}</p>
      <p className="text-gray-600">Class: {studentClass}</p>
    </div>
  );
}

export default StudentCard;
