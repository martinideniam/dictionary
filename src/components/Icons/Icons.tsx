import { FC } from "react";

const MoonIcon: FC = () => {
  return (
    <svg
      className="moonIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <path
        fill="none"
        stroke="#838383"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
      />
    </svg>
  );
};

const PlayIcon: FC = () => {
  return (
    <svg
      className="playIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
    >
      <g fill="#A445ED" fill-rule="evenodd">
        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
        <path d="M29 27v21l21-10.5z" />
      </g>
    </svg>
  );
};

export { MoonIcon, PlayIcon };