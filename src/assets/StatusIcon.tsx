
type Props = {
    index: boolean;
} & SVGProps<SVGSVGElement>;
import { SVGProps } from "react"

const StatusIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke="#64748B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M3.6 6.38H2c-.55 0-1 .45-1 1V16c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V7.38c0-.55-.45-1-1-1ZM10.8 3.19H9.2c-.55 0-1 .45-1 1V16c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V4.19c0-.55-.45-1-1-1ZM18 0h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default StatusIcon
