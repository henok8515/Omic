import { Typography } from "@material-ui/core";
import FolderStructure from "../components/FolderStructure";

function Left_Content() {
  return (
    <div className="p-5 flex flex-col w-1/6 text-xs  bg-gray-600 max-h-screen">
      <Typography variant="h4" className=" font-extrabold text-white ">
        Files
      </Typography>
      <div className="flex text-start   flex-col text-white ">
        <div className=" w-full flex m-2 items-center">
          <span className="rounded-full mt-0 mr-2 py-1 px-5 text-white bg-teal-500">
            config
          </span>{" "}
          <Typography variant="p">dataform</Typography>
        </div>
        <div className="flex  w-full m-2 items-center">
          <span className="rounded-full mr-2 py-1 px-5 text-white bg-teal-500">
            config
          </span>{" "}
          <Typography variant="p">package-lock</Typography>
        </div>
        <div className="flex w-full m-2 items-center">
          <span className="rounded-full mr-2 py-1 px-5 text-white bg-teal-500">
            config
          </span>{" "}
          <Typography variant="p">package</Typography>
        </div>
        <div className="flex mt-5 ml-2">
          <FolderStructure />
        </div>
      </div>
    </div>
  );
}

export default Left_Content;
