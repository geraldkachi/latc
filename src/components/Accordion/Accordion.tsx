import { MutableRefObject, ReactNode, useRef, useState } from "react";
// import CollapseIcon from "../../assets/svg/CollapseIcon";
// import PlusIcon from "../../assets/svg/PlusIcon";

// import PlusIcon from "../assets/svg/PlusIcon";
// import CollapseIcon from "../assets/svg/CollapseIcon";

type AccordionProps = {
    heading: string | ReactNode;
    children: ReactNode;
    showHeader?: boolean;
    open?: boolean;
    activeClass?: string;
    otherClasses?: string;
};

function Accordion({
    heading,
    showHeader = true,
    open = false,
    children,
    activeClass = "",
    otherClasses,
}: AccordionProps) {
    const [openAccordion, setopenAccordion] = useState(false);

    const toggleAccordion = () => {
        setopenAccordion(!openAccordion);
    };
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    return (
        <div
            className={`relative bg-transparent max-w-4xl w-full mx-auto mb-4  ${openAccordion ? activeClass : ""
                } ${otherClasses || ""}`}
        >
            {showHeader && (
                <div
                    className={`w-full px-4 ${open || openAccordion
                        ? ""
                        : ""
                        //   : "border shadow-[0px_8px_22px_rgba(151,143,175,0.08)]"
                        }`}
                >
                    <div
                        onClick={toggleAccordion}
                        className={`flex cursor-pointer items-center w-full gap-4 justify-between py-2 bg-transparent`}
                    >
                        <span style={{ flexGrow: 2 }} className="font-medium text-left cinz text-[#716C81]">
                            {heading}{" "}
                        </span>

                        <button type="button">

                            {open || openAccordion ? (
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_508_6039)">
                                        <path d="M8.29289 0.292893C8.68342 -0.097631 9.31658 -0.097631 9.70711 0.292893C10.0976 0.683418 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683418 0.292893 0.292893C0.683418 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292893Z" fill="#075FDC" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_508_6039">
                                            <rect width="10" height="6" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            ) : (
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683418 0.292893 0.292893C0.683418 -0.0976305 1.31658 -0.0976305 1.70711 0.292893L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683418 10.0976 0.292893 9.70711C-0.097631 9.31658 -0.097631 8.68342 0.292893 8.29289L3.58579 5L0.292893 1.70711Z" fill="#075FDC" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            )}
            <div
                ref={ref}
                style={{
                    maxHeight: open || openAccordion ? ref.current.scrollHeight : 0,
                }}
                className={`relative transition-all
        } overflow-hidden transition-all duration-[0.7rem]`}
            >
                <div className="px-5">{children}</div>
            </div>
        </div>
    );
}

export default Accordion;
// i am the best
//  i can do it all alone
// iGod is always with me
// today is my day
// i am a wining
