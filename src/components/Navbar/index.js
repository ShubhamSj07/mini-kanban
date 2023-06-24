import SearchIcon from "../../assets/search.svg";
import CalendarIcon from "../../assets/calendar.svg";
import MsgIcon from "../../assets/message.svg";
import NotifyIcon from "../../assets/notification.svg";
import ArrowDownIcon from "../../assets/arrow-down.svg";
import AvatarIcon from "../../assets/avatar.svg";

export const Navbar = props => {
  return (
    <nav className="bg-white border-b border-civia p-4 md:px-10 flex justify-between items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for anything..."
          className="bg-secondary rounded-md text-sm py-3 px-4 pl-12 placeholder-accent flex items-center md:w-60 lg:w-96 focus:outline-none"
        />
        <div className="absolute left-3 top-2.5">
          <img
            src={SearchIcon}
            alt="Search for anything"
            width={22}
            height={22}
          />
        </div>
      </div>

      <div className="flex gap-12 items-center">
        <div className="hidden md:flex gap-6 items-center">
          <img
            src={CalendarIcon}
            alt="Calendar"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <img
            src={MsgIcon}
            alt="Msg"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <img
            src={NotifyIcon}
            alt="Notify"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <div className="flex gap-6 items-center text-right">
          <div className="hidden md:block">
            <h3 className="text-base text-black">Anima Agrawal</h3>
            <p className="text-sm text-accent">U.P, India</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={AvatarIcon} alt="Anima Agrawal" />
            <img
              src={ArrowDownIcon}
              alt="Arrow Down"
              width={18}
              height={18}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
