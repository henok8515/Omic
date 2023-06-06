import { Avatar } from "@material-ui/core";
import {
  CalendarToday,
  OndemandVideo,
  Refresh,
  SearchOutlined,
  Storage,
} from "@material-ui/icons";

function Left_Nav() {
  return (
    <div className=" justify-between  text-white bg-gray-900  flex flex-col  items-center h-full w-16">
      <div className="flex transition ease-linear flex-col mt-5 h-1/2  justify-between items-center text-xs">
        <Avatar />
        <OndemandVideo className="mt-8 transition ease-linear delay-10   hover:-translate-x-1 hover:rotate-180  text-blue-700" />
        <hr className="w-9 h-0.2 mx-auto  bg-gray-100  md:my-6" />
        <SearchOutlined />
        <Refresh />
        <Storage />
        <hr className="w-9 h-0.2 mx-auto   bg-gray-100  md:my-6" />
        <CalendarToday />
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  );
}

export default Left_Nav;
