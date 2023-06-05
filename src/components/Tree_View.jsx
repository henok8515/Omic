import { ChevronRightOutlined, ExpandMoreOutlined } from "@material-ui/icons";
import { TreeItem, TreeView } from "@material-ui/lab";

export default function FileSystemNavigator() {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreOutlined />}
      defaultExpandIcon={<ChevronRightOutlined />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem nodeId="1" label="datafor_demo">
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="2" label="Calendar" />
      </TreeItem>
      <TreeItem nodeId="5" label="dataform_set2">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="8" label="index.js" />
          <TreeItem nodeId="8" label="index.js" />
          <TreeItem nodeId="8" label="index.js" />
          <TreeItem nodeId="8" label="index.js" />
          <TreeItem nodeId="8" label="index.js" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
