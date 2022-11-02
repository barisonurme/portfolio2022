import React from 'react';

const BlankSpace = (props) => {
  return <div className={`p-${props.size} flex justify-center text-white text-center`}>&nbsp;</div>;
};

export default BlankSpace;
