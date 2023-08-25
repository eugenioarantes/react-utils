import { FC } from 'react';

import { SVG, IconProps } from './base';

const Settings: FC<IconProps> = ({ className, size = 24 }) => {
  return (
    <SVG $size={size} className={className} focusable="false" viewBox="0 0 35 35" fill="none">
      <path
        d="M17.5 22.45C20.2338 22.45 22.45 20.2338 22.45 17.5C22.45 14.7662 20.2338 12.55 17.5 12.55C14.7662 12.55 12.55 14.7662 12.55 17.5C12.55 20.2338 14.7662 22.45 17.5 22.45Z"
        stroke="#696969"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.6 22C28.4003 22.4524 28.3408 22.9543 28.429 23.4409C28.5172 23.9275 28.7492 24.3765 29.095 24.73L29.185 24.82C29.4639 25.0986 29.6852 25.4295 29.8362 25.7937C29.9872 26.1579 30.0649 26.5483 30.0649 26.9425C30.0649 27.3367 29.9872 27.7271 29.8362 28.0913C29.6852 28.4555 29.4639 28.7864 29.185 29.065C28.9064 29.3439 28.5755 29.5652 28.2113 29.7162C27.8471 29.8672 27.4567 29.9449 27.0625 29.9449C26.6683 29.9449 26.2779 29.8672 25.9137 29.7162C25.5495 29.5652 25.2186 29.3439 24.94 29.065L24.85 28.975C24.4965 28.6292 24.0475 28.3972 23.5609 28.309C23.0743 28.2208 22.5724 28.2803 22.12 28.48C21.6763 28.6701 21.298 28.9859 21.0315 29.3883C20.7649 29.7907 20.6219 30.2623 20.62 30.745V31C20.62 31.7956 20.3039 32.5587 19.7413 33.1213C19.1787 33.6839 18.4156 34 17.62 34C16.8244 34 16.0613 33.6839 15.4987 33.1213C14.9361 32.5587 14.62 31.7956 14.62 31V30.865C14.6084 30.3685 14.4477 29.887 14.1588 29.4831C13.8699 29.0791 13.4661 28.7714 13 28.6C12.5476 28.4003 12.0457 28.3408 11.5591 28.429C11.0725 28.5172 10.6235 28.7492 10.27 29.095L10.18 29.185C9.90138 29.4639 9.57052 29.6852 9.20632 29.8362C8.84213 29.9872 8.45175 30.0649 8.0575 30.0649C7.66325 30.0649 7.27287 29.9872 6.90868 29.8362C6.54448 29.6852 6.21362 29.4639 5.935 29.185C5.65607 28.9064 5.43479 28.5755 5.28382 28.2113C5.13285 27.8471 5.05514 27.4567 5.05514 27.0625C5.05514 26.6683 5.13285 26.2779 5.28382 25.9137C5.43479 25.5495 5.65607 25.2186 5.935 24.94L6.025 24.85C6.37081 24.4965 6.60278 24.0475 6.69101 23.5609C6.77924 23.0743 6.71967 22.5724 6.52 22.12C6.32986 21.6763 6.01413 21.298 5.6117 21.0315C5.20926 20.7649 4.73768 20.6219 4.255 20.62H4C3.20435 20.62 2.44129 20.3039 1.87868 19.7413C1.31607 19.1787 1 18.4156 1 17.62C1 16.8244 1.31607 16.0613 1.87868 15.4987C2.44129 14.9361 3.20435 14.62 4 14.62H4.135C4.63149 14.6084 5.11301 14.4477 5.51695 14.1588C5.92089 13.8699 6.22857 13.4661 6.4 13C6.59967 12.5476 6.65924 12.0457 6.57101 11.5591C6.48278 11.0725 6.25081 10.6235 5.905 10.27L5.815 10.18C5.53607 9.90138 5.31479 9.57052 5.16382 9.20632C5.01285 8.84213 4.93514 8.45175 4.93514 8.0575C4.93514 7.66325 5.01285 7.27287 5.16382 6.90868C5.31479 6.54448 5.53607 6.21362 5.815 5.935C6.09362 5.65607 6.42449 5.43479 6.78868 5.28382C7.15287 5.13285 7.54325 5.05514 7.9375 5.05514C8.33175 5.05514 8.72213 5.13285 9.08632 5.28382C9.45052 5.43479 9.78138 5.65607 10.06 5.935L10.15 6.025C10.5035 6.37081 10.9525 6.60278 11.4391 6.69101C11.9257 6.77924 12.4276 6.71967 12.88 6.52H13C13.4437 6.32986 13.822 6.01413 14.0885 5.6117C14.3551 5.20926 14.4981 4.73768 14.5 4.255V4C14.5 3.20435 14.8161 2.44129 15.3787 1.87868C15.9413 1.31607 16.7044 1 17.5 1C18.2956 1 19.0587 1.31607 19.6213 1.87868C20.1839 2.44129 20.5 3.20435 20.5 4V4.135C20.5019 4.61768 20.6449 5.08926 20.9115 5.4917C21.178 5.89413 21.5563 6.20986 22 6.4C22.4524 6.59967 22.9543 6.65924 23.4409 6.57101C23.9275 6.48278 24.3765 6.25081 24.73 5.905L24.82 5.815C25.0986 5.53607 25.4295 5.31479 25.7937 5.16382C26.1579 5.01285 26.5483 4.93514 26.9425 4.93514C27.3367 4.93514 27.7271 5.01285 28.0913 5.16382C28.4555 5.31479 28.7864 5.53607 29.065 5.815C29.3439 6.09362 29.5652 6.42449 29.7162 6.78868C29.8672 7.15287 29.9449 7.54325 29.9449 7.9375C29.9449 8.33175 29.8672 8.72213 29.7162 9.08632C29.5652 9.45052 29.3439 9.78138 29.065 10.06L28.975 10.15C28.6292 10.5035 28.3972 10.9525 28.309 11.4391C28.2208 11.9257 28.2803 12.4276 28.48 12.88V13C28.6701 13.4437 28.9859 13.822 29.3883 14.0885C29.7907 14.3551 30.2623 14.4981 30.745 14.5H31C31.7956 14.5 32.5587 14.8161 33.1213 15.3787C33.6839 15.9413 34 16.7044 34 17.5C34 18.2956 33.6839 19.0587 33.1213 19.6213C32.5587 20.1839 31.7956 20.5 31 20.5H30.865C30.3823 20.5019 29.9107 20.6449 29.5083 20.9115C29.1059 21.178 28.7901 21.5563 28.6 22Z"
        stroke="#696969"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default Settings;
