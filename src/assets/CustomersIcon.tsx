
type Props = {
    index: boolean;
} & SVGProps<SVGSVGElement>;
import { SVGProps } from "react"

const CustomersIcon = ({ index, ...props }: Props) => (
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
            d="M10.133 9.058a1.515 1.515 0 0 0-.275 0A3.683 3.683 0 0 1 6.3 5.367c0-2.042 1.65-3.7 3.7-3.7a3.696 3.696 0 0 1 .133 7.392ZM5.967 12.133c-2.017 1.35-2.017 3.55 0 4.892 2.291 1.533 6.05 1.533 8.341 0 2.017-1.35 2.017-3.55 0-4.892-2.283-1.525-6.041-1.525-8.341 0Z"
        />
    </svg>
)
export default CustomersIcon
