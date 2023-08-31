import { Link } from "react-router-dom"
import CreateAccountForm from "./CreateAccountForm"
import Stepper from "./Stepper"

const CreateAccount = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-[.4] bg-[#001027] px-10">
        <Stepper />
      </div>
      <div className="flex flex-1 sm:flex-[.6] p-3">


        <div className="w-full">
          <Link to="/sign-in" className="flex items-center justify-end text-[#9E7F56] cursor-pointer">Already a membber? Sign in here</Link>
          <div className='flex items-center justify-center'>

          </div>

          <CreateAccountForm />
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
