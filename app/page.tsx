import React from 'react';
import StudentCard from './studentCard';

const Home = () => {
  return (
    <div style={{ borderRadius: '10px' }} className="bg-cyan-500 flex flex-wrap justify-center my-20 mx-5">
      <h1 className="text-5xl font-bold text-center text-gradient bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 my-6">
  🌟Finally I Completed Next.js 4th Class Assignment - Student ID Card Component🌟
</h1>
      <StudentCard name="Ali" age={12} rollNo={101} studentClass="4th" />
      <StudentCard name="Sara" age={11} rollNo={102} studentClass="4th" />
      <StudentCard name="Ahmed" age={12} rollNo={103} studentClass="4th" />
    </div>
  );
}

export default Home;
