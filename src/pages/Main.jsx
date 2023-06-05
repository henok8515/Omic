import { Button, Typography } from "@material-ui/core";
import {
  ArrowDropDown,
  FindInPage,
  HelpOutline,
  Layers,
  MoreHorizOutlined,
  Refresh,
} from "@material-ui/icons";
import Table from "../components/Table";
import Tree_View from "../components/Tree_View";

function Main() {
  return (
    <div className="flex-1   flex flex-col max-h-full">
      <div className=" flex  flex-1 ">
        <div style={{}} className="w-3/4  border-b-2 border-black  ">
          hello
        </div>

        <div className="border-s-2 b text-xs border-gray-200 flex flex-col justify-evenly bg-gray-700 text-white w-1/3">
          <div className="flex  p-2 w-full justify-evenly ">
            <Typography
              className="underline text-base underline-offset-8 flex1  "
              variant="p"
            >
              Outline
            </Typography>
            <Typography
              className="underline text-base underline-offset-8 flex1  "
              variant="p"
            >
              Documentation
            </Typography>
          </div>

          <div className="flex mx-2 my-4 text-yellow-300">
            <HelpOutline />
            <Typography className=" text-sm underline-offset-8 flex1  ">
              No Complition issue
            </Typography>
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
                margin: "15px 10px",
                padding: "10px 20px",
                fontSize: "small",
              }}
            >
              Execute query
            </Button>
            <Button
              style={{
                backgroundColor: "#2563EB",
                color: "white",
                fontSize: "small",
                // padding: "10px",
                margin: "15px 10px",
              }}
              className=""
              variant="contained"
            >
              Run this node
            </Button>
          </div>
        </div>
      </div>
      <div className=" flex-1  flex flex-col ">
        <div className="border-b-2 text-white bg-gray-800 border-black p-4 flex">
          <div className="flex mr-4">
            <FindInPage />
            <Typography>Query result</Typography>
          </div>
          <div className="flex">
            <Layers />
            <Typography>Schema</Typography>
          </div>
        </div>
        <div className="flex w-full h-full text-white">
          <div className=" p-6 flex flex-col  w-1/4 bg-gray-700 ">
            <div className="flex m-2 justify-between w-3/12">
              <Typography variant="p">Refresh</Typography>
              <Refresh className="ml-3" />
            </div>
            <Tree_View />
          </div>
          <div className="border w-3/4 border-indigo-600 text-black ">
            <Table />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Main;
