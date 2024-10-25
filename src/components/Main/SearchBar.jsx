import { useSearchContext } from "../context/Context";
import MailIcon from "../SvgIcon/MailIcon";
import MenuIcon from "../SvgIcon/MenuIcon";
import NotificationIcon from "../SvgIcon/NotificationIcon";

export default function SearchBar() {
  const { setSearchValue } = useSearchContext();
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <button className="lg:hidden">
        <MenuIcon />
      </button>
      <div className="mx-4 flex-1">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search here"
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
        />
      </div>
      <div className="flex items-center">
        <button className="relative mr-4">
          <NotificationIcon />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="relative mr-4">
          <MailIcon />

          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
}
