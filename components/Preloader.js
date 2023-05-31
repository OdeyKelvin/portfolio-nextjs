import React from 'react';
import Loader from 'react-loader-spinner';

const Preloader = () => {
  return (
    <div className="preloader">
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Preloader;
