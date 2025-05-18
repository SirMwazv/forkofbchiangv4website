import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
        {/* Corrected M path - right side up */}
        <path
          d="M29,58 L35,58 L35,38 L40,47 L45,38 L45,58 L51,58 L51,33 L45,33 L40,43 L35,33 L29,33 Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default IconLogo;
