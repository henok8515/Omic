import { Typography } from "@material-ui/core";
import FolderStructure from "../components/FolderStructure";

function Left_Content() {
  return (
    <div className="p-5 flex flex-col w-1/5 text-xs  bg-gray-600 max-h-screen">
      <Typography variant="h5" className="p-3 font-extrabold text-white ">
        Files
      </Typography>
      <div className="flex text-start flex-col text-white font-bold">
        <div className="flex m-2 items-center">
          <span className="rounded-full mr-2 py-1 px-5 text-white bg-teal-500">
            config
          </span>{" "}
          <Typography>dataform</Typography>
        </div>
        <div className="flex m-2 items-center">
          <span className="rounded-full mr-2 py-1 px-5 text-white bg-teal-500">
            config
          </span>{" "}
          <Typography>dataform</Typography>
        </div>
        <div className="flex m-2 items-center">
          <span className="rounded-full mr-2 py-1 px-5 text-white bg-teal-500">
            config
          </span>{" "}
          <Typography>dataform</Typography>
        </div>
        <div className="flex  ml-6">
          <FolderStructure />
        </div>
      </div>
    </div>
  );
}

export default Left_Content;
