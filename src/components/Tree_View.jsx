import {
  ChevronRightOutlined,
  ExpandMoreOutlined,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { TreeItem, TreeView } from "@material-ui/lab";
import { useState } from "react";

export default function Tree_View() {
  const [Data] = useState([
    {
      id: 1,
      name: "demo1",
      data: [
        {
          name: "dataset_1",
          isDisabled: false,
          id: Date.now(),
          catagories: "demo1",
        },
        {
          name: "dataset_2",
          isDisabled: false,
          id: Date.now(),
          catagories: "demo1",
        },
        {
          name: "dataset_3",
          isDisabled: false,
          id: Date.now(),
          catagories: "demo2",
        },
        {
          name: "dataset_4",
          isDisabled: true,
          id: Date.now(),
          catagories: "demo",
        },
      ],
    },
    {
      id: 2,
      name: "demo2",
      data: [
        {
          name: "dataset_1",
          isDisabled: false,
          id: Date.now(),
          catagories: "demo1",
        },
        {
          name: "dataset_2",
          isDisabled: false,
          id: Date.now(),
          catagories: "demo1",
        },
        {
          name: "dataset_3",
          isDisabled: false,
          id: Date.now(),
          catagories: "demo2",
        },
      ],
    },
  ]);

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreOutlined />}
      defaultExpandIcon={<ChevronRightOutlined />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      {Data.map((data) => (
        <TreeItem key={data.name} nodeId={data.id} label={data.name}>
          {data.data.map((data) => (
            <div key={data.id} className="flex text-sm">
              {data.isDisabled ? (
                <Visibility
                  key={data}
                  // onClick={() => console.log(setData(current))}
                  fontSize="small"
                />
              ) : (
                <VisibilityOff onClick={() => console.log(!data.isDisabled)} />
              )}
              <TreeItem nodeId="2" label={data.name} />
            </div>
          ))}
        </TreeItem>
      ))}
    </TreeView>
  );
}
