

import { type SVGProps } from "react";

interface IconProps extends Partial<SVGProps<SVGSVGElement>> {
  size?: string | number;
}

export const InstaIcon = ({
  color = "currentColor",
  size = 24,
  ...rest
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
      <path fill="#333" d="M17.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
};
