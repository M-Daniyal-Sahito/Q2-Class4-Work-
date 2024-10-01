import React from 'react';
import StudentCard from './studentCard';

const Home = () => {
  return (
    <div style={{ borderRadius: '10px' }} className="bg-cyan-500 flex flex-wrap justify-center my-20 mx-5">
      <StudentCard name="Ali" age={12} rollNo={101} studentClass="4th" />
      <StudentCard name="Sara" age={11} rollNo={102} studentClass="4th" />
      <StudentCard name="Ahmed" age={12} rollNo={103} studentClass="4th" />
    </div>
  );
}

export default Home;
