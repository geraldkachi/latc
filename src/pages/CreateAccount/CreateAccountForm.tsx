import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Input } from "../../components"

const CreateAccountForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')

    return (
        <div className="w-full max-w-xl mx-auto">

            <div className="text-center mb-[68px]">
                <div className="text-2xl md:text-[56px]">Create Account</div>
                <span className="text-[#C5C5C5] text-[18px] font">Fill this form to Become a member today</span>
            </div>

            <div className="text-[] mb-11">Personal Data:</div>
            <form action="" className="w-full">
                <div className="grid grid-cols-2 ga-">

                    <div className="flex items-end mb-3">

                        <span className="whitespace-nowrap mr-3">First Name:</span>
                        <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} />
                    </div>
                    <div className="flex items-end mb-3">

                        <span className="whitespace-nowrap mr-3">Last Name:</span>
                        <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} />
                    </div>
                </div>

                <div className="flex items-end mb-3">
                    <span className="whitespace-nowrap mr-3">Email:</span>
                    <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="w-full" LeadingIcon={() => <></>} />
                </div>
                <div className="flex items-end mb-3">

                    <span className="whitespace-nowrap mr-3">Phone number:</span>
                    <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="w-full" LeadingIcon={() => <></>} />
                </div>

                <div className="grid grid-cols-2 ga-">
                    <div className="flex items-end mb-3">

                        <span className="whitespace-nowrap mr-3">Employee no:</span>
                        <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} />
                    </div>
                    <div className="flex items-end mb-3">

                        <span className="whitespace-nowrap mr-3">Employee date:</span>
                        <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} />
                    </div>
                </div>

                <div className="grid grid-cols-2 ga-  mb-16">
                    <div className="flex items-end mb-3">

                        <span className="whitespace-nowrap mr-3">Job position:</span>
                        <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} />
                    </div>
                    <div className="flex items-end mb-3">

                        <span className="whitespace-nowrap mr-3">Department:</span>
                        <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} />
                    </div>
                </div>



                <Button type="submit" className="!bg-[#9E7F56] !text-white w-full" onClick={() => navigate('/dashboard')} title="Proceed" />
            </form>

        </div>
    )
}

export default CreateAccountForm
