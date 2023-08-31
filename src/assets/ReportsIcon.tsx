import { SVGProps } from "react"

type Props = {
    index: boolean;
} & SVGProps<SVGSVGElement>;

const ReportsIcon =({ index, ...props }: Props) =>  (
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
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M4.88 16.15v-2.07M10 16.15v-4.14M15.12 16.15V9.93M15.12 3.85l-.46.54a18.882 18.882 0 0 1-9.78 6.04" />
      <path strokeLinejoin="round" d="M12.19 3.85h2.93v2.92" />
      <path
        strokeLinejoin="round"
        d="M7 20h6c5 0 7-2 7-7V7c0-5-2-7-7-7H7C2 0 0 2 0 7v6c0 5 2 7 7 7Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default ReportsIcon
