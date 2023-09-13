const Cards = () => {
    return (
        <>
            <div className="col-4 flex-1">
                <div className="p-5 text-white rounded-[10.1px] bg-white py-5 px-5">
                    <div className="flex items-center justify-between mb-5">
                        <p className='text-xl text-[#4A5567] leading-[25.227px] font-bold'>Running Loans</p>
                    </div>

                    <div className="text-[#041329] flex items-center gap-x-4">
                        <span className="w-5 h-5 bg-[#18B69B] rounded-full"></span>
                        <p className="text-[30.272px] font-bold leading-[25.227px]">₦ 25,000,000</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
