import { Typography } from "@material-ui/core";

function Left_Content() {
  return (
    <div className="w-1/6 bg-gray-600 max-h-screen">
      <Typography variant="h5" className="p-3 font-extrabold text-white ">
        Files
      </Typography>
      <div className="flex flex-col text-white font-bold">
        <div className="flex m-3 items-center">
          <span className="rounded-full mr-2 py-1 px-5 text-white bg-teal-500">
            config
          </span>{" "}
          <Typography>dataform</Typography>
        </div>
        <div className="flex m-3 items-center">
          <span className="rounded-full mr-2 py-1 px-5 text-white bg-teal-500">
            config
          </span>{" "}
          <Typography>dataform</Typography>
        </div>
        <div className="flex m-3 items-center">
          <span className="rounded-full mr-2 py-1 px-5 text-white bg-teal-500">
            config
          </span>{" "}
          <Typography>dataform</Typography>
        </div>
      </div>
    </div>
  );
}

export default Left_Content;
