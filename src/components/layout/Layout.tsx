import "./layout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import BottomNav from "../bottomnav/BottomNav";


const Layout = () => {
  const lastName = localStorage.getItem("lastName");
  const firstName = localStorage.getItem("firstName");

  return (
    <div>
      {/* {open ? <ChangePasswordModal {...{ open }} {...{ close }} /> : null} */}
      <section className={` `}>
        <Sidebar />
        <div className={`layout__content bg-[#F1F5]  ${"open" ? "sm:pl-60" : "sm:pl-20"} `}>
          <div className={`layout__content-main p-5 bg-[#F1F5F9]  `}>
            <div className="flex items-center justify-end mb-3">
              <div className="flex gap-2 items-center">
                <p className="text-black text-[16px] mr-4">
                  {(new Date(), "do MMMM yyyy, hh:mm a")}
                </p>

                <div className="bg-[#F5F3F9] pr-3 py-2 flex gap-4 items-center rounded-lg px-2 whitespace-nowrap ">
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
