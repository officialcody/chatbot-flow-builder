import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "./Header";
import ReactFlow, {
  Controls,
  ReactFlowProvider,
  Background,
  useNodesState,
  useEdgesState,
  Position,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
import CustomTextMessageNode from "./CustomTextMessageNode";
import CustomEdge from "./CustomEdge";
import NodesPanelSidebar from "./NodesPanelSidebar";
import { toast } from "react-toastify";

// Custom Node type Component
const nodeTypes = {
  text: CustomTextMessageNode,
};

// Custom Edge type Component
const edgeTypes = {
  "custom-edge": CustomEdge,
};

let id = 1;
const getId = () => `${id++}`;

const toastOptions = {
  autoClose: 1500,
  closeButton: false,
  hideProgressBar: true,
};

const ChatFlowBuilder = () => {
  const reactFlowContainer = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [selectedNode, setSelectedNode] = useState(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  /**
   * DragOver Event Handler to prevent default behavior
   * and set the drop effect to move
   */
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  /**
   * Drop Event Handler to add a new node to the flow
   * whenever a node is dropped on the flow
   * it will create a new node with the type of the dropped element
   * and add it to the nodes array
   * and set the position of the new node to the mouse position
   */
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      // validate whether the dropped element is correct or not
      const type = event.dataTransfer.getData("application/reactflow");
      if (typeof type === "undefined" || !type) {
        return;
      }

      // Get the mouse position
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      // Create a new Node
      // and add it to the nodes list
      const nodeId = getId();
      const newNode = {
        id: nodeId,
        type,
        position,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: {
          value: `Text Message ${nodeId}`,
          onClick: () => onNodeClick(null, { id: nodeId }),
        },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  /**
   * Function to select the clicked node
   */
  const onNodeClick = (_, node) => setSelectedNode(node);

  /**
   * Function triggred when a node is deleted
   */
  const onNodeDelete = () => setSelectedNode(null);

  /**
   * Function to update the selected node value
   * whenever a node is selected and edited
   */
  const updateSelectedNode = (value) => {
    if (!selectedNode) {
      return;
    }

    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === selectedNode.id) {
          node.data.value = value;
        }

        return node;
      })
    );
  };

  /**
   * Funnction to validate if there are more than one nodes,
   * and any one of the node does not have a connection from source to target
   * then the flow is invalid
   */
  const validateFlow = () => {
    const sourceNodes = new Set();
    const targetNodes = new Set();

    // Collect all source and Target Nodes
    edges.forEach((edge) => {
      sourceNodes.add(edge.source);
      targetNodes.add(edge.target);
    });

    // Check which all nodes are not connect
    const nodesWithoutSourceAndTarget = nodes.filter(
      (node) => !sourceNodes.has(node.id) && !targetNodes.has(node.id)
    );

    // If there are nodes without a source and a target,
    // Show error message
    // Else save the flow to local storage
    if (nodesWithoutSourceAndTarget.length > 0) {
      toast.error("Cannot save flow", toastOptions);
    } else {
      saveFlowToLocal();
    }
  };

  // Function to store the flow in Local Storage
  const saveFlowToLocal = () => {
    localStorage.setItem("flow", JSON.stringify({ nodes, edges }));
    toast.success("Flow Saved successfully", toastOptions);
  };

  /**
   * Function triggered when we try to connect
   * one node with another
   */
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => {
        // One source can have at max One target
        // One target can have multiple sources

        // if the source node is already connected to another node
        // then do nothing
        if (eds && eds.some((e) => e.source === params.source)) {
          // give a warning
          toast.warn(
            "Cannot connect, source node already connected",
            toastOptions
          );

          return eds;
        } else if (eds && eds.some((e) => e.target === params.target)) {
          // if the target node is already connected to another node
          // then do nothing
          return addEdge({ ...params }, eds);
        } else {
          // if the source and target nodes are not connected to any other nodes
          // then add the custom edge
          // basically the custom edge, renders an arrow icon at the target node
          return addEdge({ ...params, type: "custom-edge" }, eds);
        }
      }),
    [setEdges]
  );

  // Get the flow from local storage, on page load
  useEffect(() => {
    const flow = localStorage.getItem("flow");
    if (flow) {
      const { nodes, edges } = JSON.parse(flow);
      setNodes(nodes);
      setEdges(edges);
    }
  }, [setNodes, setEdges]);

  return (
    <div className="flex flex-col h-screen">
      <Header onClickSave={validateFlow} />
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
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onNodesDelete={onNodeDelete}
              onNodeClick={onNodeClick}
              onConnect={onConnect}
              onPaneClick={() => setSelectedNode(null)}
              onEdgeClick={() => setSelectedNode(null)}
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>
          <div className="flex-grow border-s-2 border-gray-400">
            <NodesPanelSidebar
              selectedNode={selectedNode}
              cancelSelection={() => setSelectedNode(null)}
              updateSelectedNode={(value) => updateSelectedNode(value)}
            />
          </div>
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default ChatFlowBuilder;
