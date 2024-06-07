import logo from "../../assets/logo.png";
import dash from "../../assets/solid-icon.svg";
import task from "../../assets/solid-icon-1.svg";
import career from "../../assets/solid-icon-2.svg";
import profile from "../../assets/solid-icon-3.svg";
import notifications from "../../assets/solid-icon-4.svg";
import settings from "../../assets/solid-icon-5.svg";
import SidebarLink from "./SidebarLink";
import Badge from "./Badge";
import SidebarUser from "./SidebarUser";
const sidebar1 = [
  { img: dash, text: "Dashboard" },
  { img: task, text: "Task" },
  { img: career, text: "Career" },
];
const sidebar2 = [
  { img: profile, text: "Profile" },
  { img: notifications, text: "Notifications", children: <Badge /> },
  { img: settings, text: "Settings", to: "/settings" },
];
function Sidebar() {
  return (
    <div className="sidebar px-6 py-8 w-1/5 flex flex-col justify-between h-[100%] bg-white fixed">
      <div>
        <img src={logo} className="w-48 mb-6" />
        <ul className="border-b-[3px] w-full border-dashed">
          {sidebar1.map((link, i) => (
            <SidebarLink text={link.text} img={link.img} key={i} />
          ))}
        </ul>
        <ul>
          {sidebar2.map((link, i) => (
            <SidebarLink text={link.text} img={link.img} key={i} to={link.to} />
          ))}
        </ul>
      </div>
      <SidebarUser
        name="Aisha Doe"
        email="aishadoe@gmail.com"
        img="https://i.pravatar.cc/48?img=9"
      />
    </div>
  );
}

export default Sidebar;
