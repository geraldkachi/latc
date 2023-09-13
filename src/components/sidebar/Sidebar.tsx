import "./sidebar.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AdminIcon, CustomersIcon, DashboardIcon, LoanCalculatorIcon, PersonalBankingIcon, ReportsIcon, StatusIcon } from "../../assets";
import Accordion from "../Accordion/Accordion";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const routeList = [
    { route: "/dashboard", title: "Dashboard" },
    { route: "/customers", title: "Customers" },
    { route: "/personal-banking", title: "Personal Banking" },
    { route: "/history", title: "Status" },
    { route: "/stand-up", title: "Reports" },
    { route: "/report", title: "Loan Calculator" },
    { route: "/stand-up", title: "Admin" },
    // ...(isAuthorised("super-admin")
    //   ? [{ route: "/administrator", title: "Administrator" }]
    //   : []),
  ];

  const faqArr = [
    {
      header: 'Limited offer?',
      content: `We offer .`,
      route: "/dashboard", title: "Dashboard"
    },
    {
      header: 'estate developers?',
      content: `property management system.`,
      route: "/customers", title: "Customers"
    },
    {
      header: 'Government?',
      content: `for our clients.`,
      route: "/personal-banking", title: "Personal Banking"
    },
    {
      header: 'What offer?',
      content: `accessible and affordable.`,
      route: "/history", title: "Status"
    },
    { route: "/stand-up", title: "Reports" },
    { route: "/report", title: "Loan Calculator" },
    { route: "/stand-up", title: "Admin" },
  ]

  return (
    <section className={`sidebar hidden sm:block bg-white`}>
      <div
        className={` sm:w-60 w-max flex flex-col justify- transition-all ease-in-out text-white  h- relative duration-300`}>

        <div className="flex items-center justify-between p-[11px] mt-2 mb-20 gap-4 border-b border-[rgba(0, 0, 0, 0.20)] z-50">
          <div className="flex items-center">
            <div className="text-[18px] whitespace-nowrap text-[#64748B] font-extrabold">
              LATC-CORP
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-black">
          {faqArr.map((item, index) => {
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
              <Accordion key={`faq_${index}`} heading={
                <Link
                  to={item.route}
                  key={index}
                  className={`${activeItem && "bg-[#] rounded-[4px]"} ${activeItem ? "text-[#716C81]" : "text-[#716C81]"
                    } hover:text-[#d2d2d2] flex items-center cursor-pointer text-base gap-4`}
                  // className="flex items-center gap-4 js"
                >
                  <span>{iconArr[index]}</span>
                  <h1 className="font-semibold my-1 text-base text-[#]">{item?.title}</h1>
                </Link>
              }>
                <p className="py-5 text-[#]">{item?.content}</p>
              </Accordion>
            )
          })}
        </div>
        {/* <div className={`${" mx-auto px-5"}`}>
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


        </div> */}

      </div>
    </section>
  );
};
export default Sidebar;
