import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img src="/preloader.gif" alt="Loading..." className="w-24 h-24" />
    </div>
  );
};

export default Preloader;
