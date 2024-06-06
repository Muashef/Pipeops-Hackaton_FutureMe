import logo from "../../assets/logo.png";
import dash from "../../assets/solid-icon.svg";
import task from "../../assets/solid-icon-1.svg";
import career from "../../assets/solid-icon-2.svg";
import profile from "../../assets/solid-icon-3.svg";
import notifications from "../../assets/solid-icon-4.svg";
import settings from "../../assets/solid-icon-5.svg";
import { Link } from 'react-router-dom'
import SidebarLInk from "./SidebarLInk";
import Badge from "./Badge";
import SidebarUser from "./SidebarUser";
function Sidebar() {
  return (
    <div className="sidebar px-6 py-8 w-1/5 flex flex-col justify-between h-[100%] bg-red-50">
      <div>
        <img src={logo} className="w-48 mb-6" />
        <ul className="border-b-[3px] w-full border-dashed">
          <SidebarLInk img={dash} text="Dashboard" />
          <SidebarLInk img={task} text="Task" />
          <SidebarLInk img={career} text="Career" />
        </ul>
        <hr/>
        <ul>
          <SidebarLInk img={profile} text="Profile" />
          <SidebarLInk img={notifications} text="Notifications">
            <Badge />
          </SidebarLInk>
          <Link to={'/settings'}>
          <SidebarLInk img={settings} text="Settings" />
          </Link>
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
