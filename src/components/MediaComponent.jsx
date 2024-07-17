import React from 'react';
import { Link } from 'react-router-dom';

const MediaComponent = ({ icon, message }) => {
  return (
    <Link to={'/'}>
      {icon && icon}
      <p>{message}</p>
    </Link>
  );
};

export default MediaComponent;
