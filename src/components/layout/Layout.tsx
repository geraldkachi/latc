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
          <div className={`layout__content-main px-5 bg-[#fff]  `}>
            <div className="flex items-center justify-end my-3 border-b">
              <div className="flex gap-2 items-center my-3">
                <p className="text-black text-[16px] mr-4">
                  <AdminIcon className="cursor-pointer" />
                </p>
                  <img className="cursor-pointer" src="notification.svg" alt="notification" />

                <div className="bg-[#] pr-3 py-2 flex gap-4 items-center rounded-lg px-2 whitespace-nowrap ">
                  <span className="text-sm font-semibold capitalize">{`${lastName} ${firstName}`}</span>
                  profile Icon
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
        <BottomNav />
      </section>
    </div>
  );
};

export default Layout;
