import { SVGProps } from "react"

type Props = {
    index: boolean;
} & SVGProps<SVGSVGElement>;

const LoanCalculatorIcon = ({ index, ...props }: Props) =>  (
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
      d="M15.033 11.292c-.35.341-.55.833-.5 1.358.075.9.9 1.558 1.8 1.558h1.583v.992a3.14 3.14 0 0 1-3.133 3.133H5.216A3.14 3.14 0 0 1 2.083 15.2V9.592a3.14 3.14 0 0 1 3.133-3.134h9.567a3.14 3.14 0 0 1 3.133 3.134v1.2h-1.683a1.66 1.66 0 0 0-1.2.5Z"
    />
    <path
      stroke="#64748B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.083 10.342V6.533c0-.991.608-1.875 1.533-2.225l6.617-2.5a1.584 1.584 0 0 1 2.142 1.484v3.166M18.799 11.642v1.716a.856.856 0 0 1-.834.85h-1.633c-.9 0-1.725-.658-1.8-1.558-.05-.525.15-1.017.5-1.358.308-.317.733-.5 1.2-.5h1.733a.856.856 0 0 1 .834.85ZM5.833 10h5.833"
    />
  </svg>
  )


export default LoanCalculatorIcon
