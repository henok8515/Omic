import { Button, Typography } from "@material-ui/core";
import {
  ArrowDropDown,
  HelpOutline,
  MoreHorizOutlined,
} from "@material-ui/icons";

function Main() {
  return (
    <div className="flex-1 flex flex-col bg-green-400 max-h-full">
      <div className="bg-black flex flex-1">
        <div style={{}} className="w-3/4"></div>

        <div className="border-s-2 border-gray-200 flex flex-col justify-evenly bg-gray-700 text-white w-1/4">
          <div className="flex  p-2 w-full justify-evenly ">
            <Typography
              className="underline underline-offset-8 flex1  "
              variant="h6"
            >
              Outline
            </Typography>
            <Typography variant="h6">Documentation</Typography>
          </div>
          <hr />

          <div className="flex mx-2 my-4 text-yellow-300">
            <HelpOutline />
            <Typography>No Complition issue</Typography>
          </div>
          <div className="flex items-center  w-full ">
            <div className="flex items-center  w-full ml-4">
              <span className="rounded-full mr-2 py-1 px-3 text-white bg-teal-500">
                table
              </span>
              <Typography>dataset -2_with_ref</Typography>
            </div>
            <MoreHorizOutlined className="mr-3" />
          </div>
          <hr className="mt-2" />
          <div className="flex items-center justify-between m-3">
            <Typography>Dependencies</Typography>
            <div className="flex items-center">
              <p className=" p-1">3</p>
              <ArrowDropDown />
            </div>
          </div>
          <hr className="mt-2" />
          <div className="flex items-center justify-between m-3">
            <Typography>Compiled</Typography>
            <div className="flex items-center">
              <ArrowDropDown />
            </div>
          </div>
          <hr className="mt-2" />
          <div className="flex items-center justify-between m-3">
            <Typography>Query</Typography>
            <div className="flex items-center">
              <ArrowDropDown />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              style={{
                backgroundColor: "#475569",
                color: "white",
              }}
            >
              Execute query
            </Button>
            <Button
              style={{
                backgroundColor: "#2563EB",
                color: "white",
                padding: "10px",
                marginLeft: "15px",
              }}
              className=""
              variant="contained"
            >
              Run this node
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-green-400 flex-1 ">2</div>
      <hr />
    </div>
  );
}

export default Main;
