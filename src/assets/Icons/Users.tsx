import React from "react";

function Users(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 22L3.79 19.12C6.4 9.61996 17.6 9.61996 20.21 19.12L21 22"
        stroke="#151515"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 11.98C14.7614 11.98 17 9.74142 17 6.98C17 4.21857 14.7614 1.98 12 1.98C9.23858 1.98 7 4.21857 7 6.98C7 9.74142 9.23858 11.98 12 11.98Z"
        stroke="#151515"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="bevel"
      />
    </svg>
  );
}

export default Users;
