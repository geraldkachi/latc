import { AdminIcon } from '../../assets'

const Topnav = () => {
  return (
      <>
           <div className="flex items-center justify-end border-b border-[rgba(0, 0, 0, 0.20)] bg-white z-50">
              <div className="flex gap-2 items-center py-3">
                <p className="text-black text-[16px] mr-4">
                  <AdminIcon className="cursor-pointer" />
                </p>
                <img className="cursor-pointer" src="notification.svg" alt="notification" />

                <div className="pr-3 py-2 flex gap-4 items-center rounded-lg px-2 whitespace-nowrap text-[12px] font-bold text-[#64748B]">
                  jacinta@latccorp.com
                </div>
              </div>
            </div>
      </>
  )
}

export default Topnav
