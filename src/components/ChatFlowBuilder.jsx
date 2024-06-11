import React, { useRef } from "react";
import Header from "./Header";
import ReactFlow, { Controls, ReactFlowProvider, Background } from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "2", target: "1" }];

const ChatFlowBuilder = () => {
  const reactFlowWrapper = useRef(null);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-grow h-full">
        <ReactFlowProvider>
          <div
            className="reactflow-wrapper w-3/4 h-full"
            ref={reactFlowWrapper}
          >
            <ReactFlow fitView nodes={initialNodes} edges={initialEdges}>
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
