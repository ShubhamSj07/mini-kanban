import { AdWidget } from "../AdWidget";

const Menus = [
  {
    title: "Home",
    src: require("../../assets/sidebar/dashboard.svg").default,
  },
  {
    title: "Messages",
    src: require("../../assets/sidebar/message.svg").default,
  },
  {
    title: "Tasks",
    src: require("../../assets/sidebar/tasks.svg").default,
  },
  {
    title: "Members ",
    src: require("../../assets/sidebar/members.svg").default,
  },
  {
    title: "Settings ",
    src: require("../../assets/sidebar/settings.svg").default,
  },
];

const subMenus = [
  {
    title: "Mobile App",
    src: <span className="inline-block w-2 h-2 rounded-full bg-done" />,
  },
  {
    title: "Website Redesign",
    src: <span className="inline-block w-2 h-2 rounded-full bg-inProgress" />,
  },
  {
    title: "Design System",
    src: <span className="inline-block w-2 h-2 rounded-full bg-[#E4CCFD]" />,
  },
  {
    title: "Wireframes ",
    src: <span className="inline-block w-2 h-2 rounded-full bg-[#76A5EA]" />,
  },
];

const Sidebar = ({ open, setOpen }) => {
  return (
    <div>
      <img
        src={require("../../assets/sidebar/double-arrow.svg").default}
        className={`absolute right-5 top-7 cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
        alt=""
      />
      <div
        className={`${
          !open ? "block py-[1.63rem]" : "flex items-center gap-4"
        } py-6 px-6 `}
      >
        <img
          src={require("../../assets/project-m.svg").default}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          alt=""
        />
        <h1
          className={`${
            !open ? "hidden" : "block"
          } text-black font-bold origin-left text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Project M.
        </h1>
      </div>
      <ul className="border-t border-civia py-2 pb-0 px-4">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-accent text-sm items-center gap-x-4 hover:bg-[#F1EEFD] hover:text-black ${
              Menu.gap ? "mt-4" : "mt-[2px]"
            } ${index === 0 && "bg-light-white"} ${
              !open ? "justify-center" : "justify-start"
            } `}
          >
            <img src={Menu.src} alt={Menu.title} />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 font-medium text-base hover:font-semibold`}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
      <ul className="border-t border-civia my-2 pt-5 mx-4">
        <div className="flex justify-between items-center px-2">
          <p
            className={`text-accent ${
              !open ? "text-[10px] text-center" : "text-xs"
            } font-bold uppercase`}
          >
            My Projects
          </p>
          <img
            src={require("../../assets/sidebar/add.svg").default}
            alt="Add Project"
            className={`${!open && "hidden"} cursor-pointer}`}
          />
        </div>
        {subMenus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-accent text-sm items-center gap-x-4 hover:bg-[#F1EEFD] hover:text-black  ${
              Menu.gap ? "mt-4" : "mt-[2px]"
            } ${index === 0 && "bg-light-white !mt-2"} ${
              !open ? "justify-center" : "justify-start"
            } `}
          >
            {Menu.src}
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 font-medium text-base hover:font-semibold`}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
      <AdWidget open={open} />
    </div>
  );
};

export default Sidebar;
