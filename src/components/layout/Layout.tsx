import "./layout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import BottomNav from "../bottomnav/BottomNav";
import { AdminIcon } from "../../assets";


const Layout = () => {
  const lastName = localStorage.getItem("lastName");
  const firstName = localStorage.getItem("firstName");

  return (
    <div>
      {/* {open ? <ChangePasswordModal {...{ open }} {...{ close }} /> : null} */}
      <section className={` `}>
        <Sidebar />
        <div className={`layout__content bg-[#]  ${"open" ? "sm:pl-60" : "sm:pl-20"} `}>
          <div className={`layout__content-main bg-[#F1F5F9;]  `}>
            <div className="flex items-center justify-end my-3 border-b border-[rgba(0, 0, 0, 0.20)] bg-white z-50">
              <div className="flex gap-2 items-center my-3">
                <p className="text-black text-[16px] mr-4">
                  <AdminIcon className="cursor-pointer" />
                </p>
                <img className="cursor-pointer" src="notification.svg" alt="notification" />

                <div className="pr-3 py-2 flex gap-4 items-center rounded-lg px-2 whitespace-nowrap text-[12px] font-bold text-[#64748B]">
                  jacinta@latccorp.com
                </div>
              </div>
            </div>

            <div className="px-3">
              <Outlet />
            </div>

          </div>
        </div>
        <BottomNav />
      </section>
    </div>
  );
};

export default Layout;
