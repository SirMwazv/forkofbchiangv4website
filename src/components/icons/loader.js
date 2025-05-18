import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <style>
      {`
        @keyframes letterChange {
          0%, 25% { opacity: 1; }
          26%, 50% { opacity: 0; }
          51%, 75% { opacity: 1; }
          76%, 100% { opacity: 0; }
        }
        
        #hexM, #letterM { animation: letterChange 4s infinite; }
        #hexM2, #letterM2 { animation: letterChange 4s infinite; }
        #hexJ, #letterJ { animation: letterChange 4s infinite 1s; }
        #hexMFinal, #letterMFinal { animation: letterChange 4s infinite 2s; }
      `}
    </style>
    <g>
      {/* First hexagon with M */}
      <g id="hexM">
        <path
          stroke="var(--green)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
        />
      </g>

      <g id="letterM" transform="translate(11.000000, 5.000000)">
        <path
          d="M28.541667,61 L33.591667,61 L33.591667,41 L38.591667,50 L43.591667,41 L43.591667,61 L48.691667,61 L48.691667,30.3 L43.591667,30.3 L38.591667,40.3 L33.591667,30.3 L28.541667,30.3 Z"
          fill="var(--green)"
        />
      </g>
    </g>
    <g>
      {/* Second hexagon with M */}
      <g id="hexM2">
        <path
          stroke="var(--green)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
        />
      </g>

      <g id="letterM2" transform="translate(11.000000, 5.000000)">
        <path
          d="M28.541667,61 L33.591667,61 L33.591667,41 L38.591667,50 L43.591667,41 L43.591667,61 L48.691667,61 L48.691667,30.3 L43.591667,30.3 L38.591667,40.3 L33.591667,30.3 L28.541667,30.3 Z"
          fill="var(--green)"
        />
      </g>

      {/* Third hexagon with J */}
      <g id="hexJ" style={{ opacity: 0 }}>
        <path
          stroke="var(--green)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
        />
      </g>

      <g id="letterJ" transform="translate(11.000000, 5.000000)" style={{ opacity: 0 }}>
        <path
          d="M41,30.3 L41,50.3 C41,54.3 39,61 33,61 C28,61 26,57 26,54 L31,54 C31,55.5 32,57 33,57 C35.5,57 36,54.5 36,51 L36,30.3 L41,30.3 Z"
          fill="var(--green)"
        />
      </g>

      {/* last hexagon with M */}
      <g id="hexMFinal" style={{ opacity: 0 }}>
        <path
          stroke="var(--green)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
        />
      </g>

      <g id="letterMFinal" transform="translate(11.000000, 5.000000)" style={{ opacity: 0 }}>
        <path
          d="M28.541667,61 L33.591667,61 L33.591667,41 L38.591667,50 L43.591667,41 L43.591667,61 L48.691667,61 L48.691667,30.3 L43.591667,30.3 L38.591667,40.3 L33.591667,30.3 L28.541667,30.3 Z"
          fill="var(--green)"
        />
      </g>
    </g>
  </svg>
);

export default IconLoader;
