import { Button, Typography } from "@material-ui/core";
import { ArrowDropDown, ArrowDropDownCircleOutlined } from "@material-ui/icons";
// import CommitIcon from "@mui/icons-material/Commit";
function Header() {
  return (
    <div className=" flex justify-between bg-gray-800  h-12  text-xs h-16 text-white  items-center">
      <div className="flex items-center  h-full w-5/12 ml-3 ">
        <div className="flex items-center">
          <Typography variant="p " className="">
            Project Name
          </Typography>
          <span className="pl-2">
            <ArrowDropDownCircleOutlined />
          </span>
        </div>
        <select
          id="mode"
          className="ml-4 mr-3  bg-gray-600   border-gray-300 text-white text-sm rounded-md  focus:ring-black focus:border-black block  p-2.5 dark:bg-gray-700 border-gray-950600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-black dark:focus:border-black"
        >
          {" "}
          {/* <CommitIcon /> */}
          <option disabled selected>
            SelectMode{" "}
          </option>
          <option value="dev">Development </option>
          <option value="prod">Production</option>
          <option value="test">Test</option>
          <ArrowDropDown />
        </select>
        <button className="bg-blue-500 text-sm  text-white font-bold py-2 px-2 rounded">
          Commits(2files)
        </button>
      </div>
      <div>2</div>
    </div>
  );
}

export default Header;
