import React from "react";

const ReserveMessageIcon = ({ width = "100", height = "101" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M84 0H16C7.16344 0 0 7.16345 0 16V84C0 92.8366 7.16345 100 16 100H84C92.8366 100 100 92.8366 100 84V16C100 7.16344 92.8366 0 84 0Z"
        fill="#C9E3F7"
      ></path>
      <rect x="20" y="28" width="60" height="44" fill="white"></rect>
      <path d="M20 28L49 28L80 28L50 58L20 28Z" fill="#0A0777"></path>
    </svg>
  );
};

export default ReserveMessageIcon;
