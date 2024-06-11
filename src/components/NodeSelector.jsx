import { BiMessageRoundedDetail } from "react-icons/bi";

// NodeType: We can add more node types here like,
const nodeTypes = [
  {
    type: "text",
    value: "Message",
    Icon: BiMessageRoundedDetail,
    disabled: true,
  },
  // {
  //     type: "file",
  //     value: "File",
  //     icon: BiFile,
  //     disabled: false,
  // },
];

// Select the type of Node and accordingly send it to the drop event in order
// to add a new node of particular type
const NodeSelector = () => {
  const onDragStart = (event, node) => {
    event.dataTransfer.setData("application/reactflow", node.type);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="text-center">
      <h1 className="text-lg font-medium mb-3">Nodes Panel</h1>
      <div className="flex flex-wrap justify-center">
        {nodeTypes.map((Node) => (
          <div
            key={Node.type}
            onDragStart={(event) => onDragStart(event, Node)}
            draggable
            className="flex flex-col items-center justify-between p-4 my-2 bg-white border-2 border-blue-500 rounded-lg font-medium transition-all w-[48%] active:scale-95 cursor-pointer"
          >
            <div className="rounded-full mb-5">
              <Node.Icon size={24} className="text-blue-500" />
            </div>
            <span className="text-base select-none text-blue-500">
              {Node.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodeSelector;
