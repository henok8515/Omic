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
import Editor from "../components/Editor";

function Main() {
  return (
    <div className="flex-1   flex flex-col ">
      <div className=" flex h-full  flex-1  ">
        <div style={{}} className="w-3/4 bg-gray-700 h-full    ">
          <div className="flex justify-between items-center  text-white p-2 border-gray-500 border-b-2">
            <p>definatin/1_sample_examples/dataset.sql</p>
            <button className="bg-gray-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
              save
            </button>
          </div>
          <div className="flex h-5/6 w-full justify-center overflow-hidden">
            <Editor />
          </div>
        </div>

        <div className="border-s-2 b text-xs border-gray-500 flex flex-col h-full bg-gray-700 h-full text-white w-1/3">
          <div className="flex w-full justify-around ">
            <p className="underline text-sm underline-offset-8  text-gray-200 dark:text-gray-400  ">
              Outline
            </p>
            <p className="underline text-sm underline-offset-8  text-gray-200 dark:text-gray-400  ">
              Documentation
            </p>
          </div>

          <div className="flex mx-1 mt-2 text-yellow-300">
            <HelpOutline fontSize="small" />
            <p className="text-sm  mb-3 text-gray-300 dark:text-gray-400  ">
              Complition issue
            </p>
          </div>
          <div className="flex items-center  w-full mb-2">
            <div className="flex items-center  w-full ml-4 ">
              <span className="rounded-full mr-1  px-3 text-white bg-teal-500">
                table
              </span>
              <p className="text-sm underline-offset-8  text-gray-200 dark:text-gray-400  ">
                dataset_2_with_rf
              </p>
            </div>
            <MoreHorizOutlined className="mr-3" />
          </div>
          <hr className="" />
          <div className="flex items-center justify-between m-1">
            <Typography variant="p">Dependencies</Typography>
            <div className="flex items-center">
              <p className=" ">3</p>
              <ArrowDropDown />
            </div>
          </div>
          <hr className="mt-2" />
          <div className="flex items-center justify-between m-1">
            <Typography variant="p">Compiled</Typography>
            <div className="flex items-center">
              <ArrowDropDown />
            </div>
          </div>
          <hr className="" />
          <div className="flex items-center justify-between m-1">
            <Typography variant="p">Query</Typography>
            <div className="flex items-center">
              <ArrowDropDown />
            </div>
          </div>
          <div className="flex justify-around">
            <button className="bg-gray-600  text-sm  text-white font-bold py-2 px-2 rounded">
              execute Query
            </button>
            <button className="bg-blue-500 text-sm  text-white font-bold py-2 px-2 rounded">
              Run this Node
            </button>
          </div>
        </div>
      </div>
      <div className=" flex-1  flex flex-col ">
        <div className="border-b-2 text-white bg-gray-800 border-gray-500 p-2 flex">
          <div className="flex mr-4 items-center">
            <FindInPage fontSize="small" />
            <Typography variant="p">Query result</Typography>
          </div>
          <div className="flex items-center">
            <Layers fontSize="small" />
            <Typography variant="p">Schema</Typography>
          </div>
        </div>
        <div className="flex w-full h-full text-white">
          <div className=" p-2 flex flex-col  w-1/4 bg-gray-800 ">
            <div className="flex   mb-2 items-center justify-between w-3/12">
              <Typography variant="p">Refresh</Typography>
              <Refresh fontSize="small" className=" ml-2" />
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
