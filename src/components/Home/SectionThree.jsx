import React from 'react';
const SectionTwo = React.lazy(() => import('./SectionTwo'));

const SectionThree = () => {
  return (
    <div>
      <SectionTwo
        title={
          'ERP System Software Developed Exclusively for Ethiopian Companies'
        }
        desc={
          'Each and every module has specific purpose in ERP software. These modules look over and manage different divisions and departments of the industry.'
        }
      />
    </div>
  );
};

export default SectionThree;
