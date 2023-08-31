type Props = {
    index: boolean;
} & SVGProps<SVGSVGElement>;
import { SVGProps } from "react"

const PersonalBankingIcon = ({ index, ...props }: Props) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.083 6.6v4.292c0 2.566-1.466 3.666-3.666 3.666H5.09c-.375 0-.733-.033-1.066-.108a3.235 3.235 0 0 1-.592-.158c-1.25-.467-2.008-1.55-2.008-3.4V6.6c0-2.567 1.466-3.667 3.666-3.667h7.325c1.867 0 3.209.792 3.567 2.6.058.334.1.675.1 1.067Z"
    />
    <path
      stroke="#64748B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.584 9.1v4.292c0 2.566-1.467 3.666-3.667 3.666H7.592c-.617 0-1.175-.083-1.658-.266-.992-.367-1.667-1.125-1.909-2.342.334.075.692.108 1.067.108h7.325c2.2 0 3.667-1.1 3.667-3.666V6.6c0-.392-.034-.742-.1-1.067 1.583.334 2.6 1.45 2.6 3.567Z"
    />
    <path
      stroke="#64748B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8.749 10.95a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM3.983 6.917v3.666M13.518 6.917v3.667"
    />
  </svg>
)
export default PersonalBankingIcon


