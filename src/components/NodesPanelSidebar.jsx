import React from "react";
import NodeSelector from "./NodeSelector";
import TextNodeEditor from "./TextNodeEditor";

// Node Panel Sidebar
const NodesPanelSidebar = ({
  selectedNode,
  updateSelectedNode,
  cancelSelection,
}) => {
  const renderNodeAccordingToType = (selectedNode) => {
    // For Existing Node
    if (selectedNode && selectedNode.type === "text") {
      return (
        <TextNodeEditor
          cancelSelection={cancelSelection}
          selectedNode={selectedNode}
          updateSelectedNode={updateSelectedNode}
        />
      );
    }
    // For New Node
    return (
      <div className="p-4">
        <NodeSelector />
      </div>
    );
  };

  return <div>{renderNodeAccordingToType(selectedNode)}</div>;
};

export default NodesPanelSidebar;
