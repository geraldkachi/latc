import "./layout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import BottomNav from "../bottomnav/BottomNav";
// import { AdminIcon } from "../../assets";
import Topnav from "./Topnav";


const Layout = () => {
  // const lastName = localStorage.getItem("lastName");
  // const firstName = localStorage.getItem("firstName");

  return (
    <div>
      {/* {open ? <ChangePasswordModal {...{ open }} {...{ close }} /> : null} */}
      <section className={` `}>
        <Sidebar />
        <div className={`layout__content  ${"open" ? "sm:pl-60" : "sm:pl-20"} `}>
          <div className={`layout__content-main bg-[#F1F5F9]  `}>
            <Topnav />
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
