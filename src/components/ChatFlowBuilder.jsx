import React, { useRef } from "react";
import Header from "./Header";
import ReactFlow, {
  Controls,
  ReactFlowProvider,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";
import CustomTextMessageNode from "./CustomTextMessageNode";
import CustomEdge from "./CustomEdge";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

// Custom Node type Component
const nodeTypes = {
  textNode: CustomTextMessageNode,
};

// Custom Edge type Component
const edgeTypes = {
  "custom-edge": CustomEdge,
};

const ChatFlowBuilder = () => {
  const reactFlowContainer = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-grow h-full">
        <ReactFlowProvider>
          <div
            className="reactflow-wrapper w-3/4 h-full"
            ref={reactFlowContainer}
          >
            <ReactFlow
              fitView
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default ChatFlowBuilder;
