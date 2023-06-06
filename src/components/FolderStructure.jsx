import { TreeItem, TreeView } from "@material-ui/lab";
import { ChevronRight, ExpandMoreOutlined, Folder } from "@material-ui/icons";

export default function FileSystemNavigator() {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={
        <div className="flex mr-3">
          <ExpandMoreOutlined />
          <Folder />
        </div>
      }
      defaultExpandIcon={
        <div className="flex mr-3">
          <ChevronRight />
          <Folder />
        </div>
      }
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem nodeId="1" label="model1">
        <div className="flex justify-start m-0">
          <span className="rounded-full  py-1 px-3 text-white bg-green-600">
            SQL
          </span>{" "}
          <TreeItem nodeId="2" label="dataset_1" />
        </div>
        <div className=" justify-start flex mt-2 items-center m-0">
          <span className="rounded-full  py-1 px-3 text-white bg-green-600">
            SQL
          </span>{" "}
          <TreeItem nodeId="2" label="dataset_2" />
        </div>{" "}
        <div className="flex justify-start w-full  mt-2  m-0">
          <span className="rounded-full  py-1 px-3 text-white bg-green-600">
            SQL
          </span>{" "}
          <TreeItem nodeId="2" label="dataset_3" />
        </div>
      </TreeItem>
      <TreeItem nodeId="5" label="model2">
        <div className="flex justify-start w-full  mt-2  m-0">
          <span className="rounded-full  py-1 px-3 text-white bg-amber-400">
            JS
          </span>{" "}
          <TreeItem nodeId="2" label="dataset_3" />
        </div>
        <div className="flex justify-start w-full  mt-2  m-0">
          <span className="rounded-full  py-1 px-3 text-white bg-amber-400">
            JS
          </span>{" "}
          <TreeItem nodeId="2" label="dataset_3" />
        </div>
        <TreeItem nodeId="6" label="model3">
          <div className="flex justify-start w-full  mt-2  m-0"></div>
          <div className="flex justify-start w-full  mt-2  m-0">
            <span className="rounded-full  py-1 px-3 text-white bg-blue-500">
              ops
            </span>{" "}
            <TreeItem nodeId="2" label="dataset_3" />
          </div>
          <div className="flex justify-start w-full  mt-2  m-0">
            <span
              className="rounded-full  py-1 px-3 text-white bg-red-400
            "
            >
              assert
            </span>{" "}
            <TreeItem nodeId="2" label="dataset_3" />
          </div>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
