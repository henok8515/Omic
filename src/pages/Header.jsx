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
        <button className=" text-xs flex items-center justify-between  ml-2 mr-2 font-semibold text-white py-1 px-3 border border-white  rounded">
          Development
          <ArrowDropDown />
        </button>
        <Button
          style={{
            backgroundColor: "skyblue",
            padding: "7px 10px",
            fontSize: "10px",
            textTransform: "capitalize",
          }}
        >
          {/* <CommitIcon /> */}
          Commits(2files)
        </Button>
      </div>
      <div>2</div>
    </div>
  );
}

export default Header;
