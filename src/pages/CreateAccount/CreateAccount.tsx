import { useState } from "react"
import { Link } from "react-router-dom"
import CreateAccountForm from "./CreateAccountForm"
import Stepper from "./Stepper"

const CreateAccount = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  return (
    <div className="flex h-screen">
      <div className="flex flex-[.4] bg-[#001027] px-10">
        <Stepper {...{ currentStep, setCurrentStep }} />
      </div>
      <div className="flex-col flex-1 sm:flex-[.6] p-3 flex justify-between relative">

        <Link to="/sign-in" className="flex items-center justify-end text-[#9E7F56] cursor-pointer">Already a membber? Sign in here</Link>
        {currentStep === 1 && (
          <CreateAccountForm />
        )}
        {currentStep === 2 && (
          <CreateAccountForm />
        )}
        {currentStep === 3 && (
          <CreateAccountForm />
        )}
        {currentStep === 4 && (
          <CreateAccountForm />
        )}

        {/* <div className=""></div> */}

      </div>
    </div>
  )
}

export default CreateAccount
