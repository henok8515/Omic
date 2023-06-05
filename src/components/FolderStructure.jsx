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
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="2" label="Calendar" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="8" label="index.js" />
          <TreeItem nodeId="8" label="index.js" />
          <TreeItem nodeId="8" label="index.js" />
          <TreeItem nodeId="8" label="index.js" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
