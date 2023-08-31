import "./sidebar.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AdminIcon, CustomersIcon, DashboardIcon, LoanCalculatorIcon, PersonalBankingIcon, ReportsIcon, StatusIcon } from "../../assets";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const routeList = [
    { route: "/home", title: "Dashboard" },
    { route: "/task", title: "Customers" },
    { route: "/staff", title: "Personal Banking" },
    { route: "/history", title: "Status" },
    { route: "/stand-up", title: "Reports" },
    { route: "/report", title: "Loan Calculator" },
    { route: "/stand-up", title: "Admin" },
    // ...(isAuthorised("super-admin")
    //   ? [{ route: "/administrator", title: "Administrator" }]
    //   : []),
  ];

  return (
    <section className={`sidebar hidden sm:block`}>
      <div
        className={` sm:w-60 w-max flex flex-col justify-between transition-all ease-in-out  top-0 left-0 bg-[#] text-white p-5 h-screen pt-8 relative duration-300`}
      >
        <div className={`pt-6 ${"" && " mx-auto"}`}>
          <div className="flex items-center justify-between pb-10 gap-4">
            <div className="flex items-center gap-3">
              <div className="text-xl whitespace-nowrap text-[#64748B] font-extrabold">
                LATC-CORP
              </div>
            </div>
            {/* <MenuIcon
              onClick={() => setOpen(!open)}
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            /> */}
          </div>
          {routeList.map((item, index) => {
            const activeItem = location.pathname.includes(item?.route);

            const iconArr = [
              <DashboardIcon key={1} index={activeItem} />,
              <CustomersIcon key={2} index={activeItem} />,
              <PersonalBankingIcon key={4} index={activeItem} />,
              <StatusIcon key={3} index={activeItem} />,
              <ReportsIcon key={5} index={activeItem} />,
              <LoanCalculatorIcon key={6} index={activeItem} />,
              <AdminIcon key={7} index={activeItem} />,
            ];

            return (
              <Link
                to={item.route}
                key={index}
                className={`${activeItem && "bg-[#] rounded-[4px]"} ${activeItem ? "text-[#716C81]" : "text-[#716C81]"
                  } hover:text-[#d2d2d2] flex items-center rounded-md p-2 cursor-pointer my-4 text-base space-x-7`}
              >
                <div key={index}> {iconArr[index]}</div>

                <span className={` origin-left duration-200`}>
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>

        {/* <div
          className="flex items-center justify-start bg-[#E8E9F2] p-2 rounded-[4px] cursor-pointer"
          onClick={logout}
        >
          <div className="flex items-center  gap-5">
            <div className={`text-red-600 text-sm`}> Logout</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Sidebar;
