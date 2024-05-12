import React from "react";

const ConfirmationClockIcon = ({ width = "100", height = "100" }) => {
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
      <circle cx="50" cy="50" r="30" fill="#0A0777"></circle>
      <path
        d="M50 20C33.4192 20 20 33.4543 20 50C20 66.5808 33.4192 80 50 80C66.5808 80 80 66.5808 80 50C80 33.4543 66.5808 20 50 20ZM45.1522 60.8899L44.555 60.2927L36.6159 52.3536L40.0585 48.911L45.1171 53.9696L59.9415 39.1452L63.3841 42.5878L45.1522 60.8899Z"
        fill="white"
      ></path>
    </svg>
  );
};

export default ConfirmationClockIcon;
