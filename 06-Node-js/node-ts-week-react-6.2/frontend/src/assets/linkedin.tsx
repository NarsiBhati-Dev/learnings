import React from "react";
import { IconProps } from "./icon-types";

const LinkedinIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M34.7854 7H9.21458C8.62724 7 8.06395 7.23332 7.64864 7.64864C7.23332 8.06395 7 8.62724 7 9.21458V34.7854C7 35.3728 7.23332 35.9361 7.64864 36.3514C8.06395 36.7667 8.62724 37 9.21458 37H34.7854C35.3728 37 35.9361 36.7667 36.3514 36.3514C36.7667 35.9361 37 35.3728 37 34.7854V9.21458C37 8.62724 36.7667 8.06395 36.3514 7.64864C35.9361 7.23332 35.3728 7 34.7854 7ZM15.9417 32.5562H11.4313V18.2292H15.9417V32.5562ZM13.6833 16.2438C13.1717 16.2409 12.6724 16.0865 12.2484 15.8001C11.8244 15.5137 11.4948 15.1082 11.3011 14.6346C11.1074 14.1611 11.0583 13.6407 11.16 13.1393C11.2618 12.6379 11.5098 12.1778 11.8727 11.8172C12.2356 11.4566 12.6973 11.2116 13.1993 11.1131C13.7014 11.0146 14.2214 11.067 14.6937 11.2637C15.166 11.4605 15.5694 11.7927 15.8531 12.2185C16.1367 12.6443 16.2879 13.1446 16.2875 13.6563C16.2923 13.9988 16.2281 14.3388 16.0988 14.656C15.9694 14.9732 15.7775 15.2611 15.5345 15.5026C15.2914 15.744 15.0023 15.9341 14.6843 16.0614C14.3662 16.1888 14.0258 16.2508 13.6833 16.2438ZM32.5667 32.5688H28.0583V24.7417C28.0583 22.4333 27.0771 21.7208 25.8104 21.7208C24.4729 21.7208 23.1604 22.7292 23.1604 24.8V32.5688H18.65V18.2396H22.9875V20.225H23.0458C23.4813 19.3438 25.0063 17.8375 27.3333 17.8375C29.85 17.8375 32.5688 19.3313 32.5688 23.7063L32.5667 32.5688Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="3.5"
          y1="7.00001"
          x2="46.1922"
          y2="17.622"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DFDFDF" />
          <stop offset="0.313154" stop-color="#4C5055" />
          <stop offset="1" stop-color="#191E24" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LinkedinIcon;
