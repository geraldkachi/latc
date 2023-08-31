import { SVGProps } from "react"

type Props = {
    index: boolean;
} & SVGProps<SVGSVGElement>;

const DashboardIcon = ({ index, ...props }: Props) =>  (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#64748B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.333 9.083V3.417c0-1.25-.533-1.75-1.858-1.75h-3.367c-1.325 0-1.858.5-1.858 1.75v5.666c0 1.25.533 1.75 1.858 1.75h3.367c1.325 0 1.858-.5 1.858-1.75ZM18.333 16.583v-1.5c0-1.25-.533-1.75-1.858-1.75h-3.367c-1.325 0-1.858.5-1.858 1.75v1.5c0 1.25.533 1.75 1.858 1.75h3.367c1.325 0 1.858-.5 1.858-1.75ZM8.75 10.917v5.666c0 1.25-.533 1.75-1.858 1.75H3.525c-1.325 0-1.858-.5-1.858-1.75v-5.666c0-1.25.533-1.75 1.858-1.75h3.367c1.325 0 1.858.5 1.858 1.75ZM8.75 3.417v1.5c0 1.25-.533 1.75-1.858 1.75H3.525c-1.325 0-1.858-.5-1.858-1.75v-1.5c0-1.25.533-1.75 1.858-1.75h3.367c1.325 0 1.858.5 1.858 1.75Z"
    />
  </svg>
  )
export default DashboardIcon
