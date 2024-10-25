import CalendarIcon from "../SvgIcon/CalendarIcon";
import ContactIcon from "../SvgIcon/ContactIcon";
import DashBoardIcon from "../SvgIcon/DashBoardIcon";
import KanbanIcon from "../SvgIcon/KanbanIcon";
import MessageIcon from "../SvgIcon/MessageIcon";
import ProjectIcon from "../SvgIcon/ProjectIcon";
import SettingIcon from "../SvgIcon/SettingIcon";
import logo from "../../assets/lws-logo-en.svg";
import SidebarIcon from "./SidebarIcon";

export default function Sidebar() {
  const icons = [
    { icon: <CalendarIcon />, name: "Calendar" },
    { icon: <ContactIcon />, name: "Contact" },
    { icon: <DashBoardIcon />, name: "Dashboard" },
    { icon: <KanbanIcon />, name: "Kanban" },
    { icon: <MessageIcon />, name: "Message" },
    { icon: <ProjectIcon />, name: "Project" },
    { icon: <SettingIcon />, name: "Setting" },
  ];
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img src={logo} className="mx-auto h-10 text-center" />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          {icons.map((icon) => (
            <SidebarIcon key={icon.name} icon={icon.icon} name={icon.name} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
