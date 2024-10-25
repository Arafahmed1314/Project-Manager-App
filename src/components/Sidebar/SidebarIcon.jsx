/* eslint-disable react/prop-types */
export default function SidebarIcon({ icon, name }) {
  return (
    <li>
      <a href="#" className="flex items-center">
        {/* <DashBoardIcon /> */}
        {icon}
        {name}
        {/* Dashboard */}
      </a>
    </li>
  );
}
