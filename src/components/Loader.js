/** @format */

import React from 'react';

export const Loader = () => {
  return (
    <div className="loader-wrapper" role="status">
      <div
        className="spinner-border text-center text-primary pt-3"
        role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
