import { useState } from 'react'
import './stepper.css'
const Stepper = () => {
    const [currentStep, setCurrentStep] = useState<number>(1)
    const [complete, setComplete] = useState<boolean>(false)
    const steps = ['Personal Data:', 'Account Information', 'Choose Products', 'Choose a Password']
    // const steps = ['Personal Data:', 'Account Information', 'Choose Products', ]
    return (
        <div className='flex flex-col items-start justify-between h-full'>

            <div className='fle flex-col text-white mt-20'>
                <p className='text-[40px] mb-10'>LATC</p>
                <div className="flex flex-col justify-between gap-4">
                    {steps.map((step, i) => (
                        <>
                            <div key={i} className={`flex flex-col items-start pb-7 step-item ${currentStep === i + 1 && 'active'} ${i + 1 < currentStep || complete && 'complete'}`}>
                                <div className={`step border bg-white  border-white  ${currentStep === i + 1 && 'bg-white'}`}>{i + 1 < currentStep || complete ? <img src="/check.svg" alt="check" /> : (i + 2 < currentStep || complete ? <span className='w-4 h-4 flex items-center justify-center bg-[#001027] rounded-full'></span> : <span className='w-4 h-4 flex items-center justify-center border border-white  rounded-full'></span>)}</div>

                                <p className="text-white">{step}</p>
                            </div>
                        </>
                    ))}
                </div>

                {!complete &&
                    <div>
                        <button className='btn ' onClick={() => {
                            currentStep === steps.length
                                ? setComplete(true)
                                : setCurrentStep(prev => prev + 1)
                        }
                        }> {currentStep === steps.length ? "Finish" : "Next"}</button>
                    </div>
                }
            </div>

            <div className="flex items-end text-white gap-10">
                <div>{new Date().getFullYear()} LATC. All rioghts reserved</div>
                <div>Info@Latcgroup.com</div>
            </div>
        </div>
    )
}

export default Stepper
