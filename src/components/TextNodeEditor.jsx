import { IoIosArrowRoundBack } from "react-icons/io";

/**
 * When we click on the Node to edit, this is where we see the edit details fields on the sidebar
 */
const TextNodeEditor = ({
  selectedNode,
  updateSelectedNode,
  cancelSelection,
}) => {
  return (
    <div className="">
      <div className="text-center pt-4 border-b">
        <h1 className="text-lg font-medium mb-3">Settings Panel</h1>
      </div>
      <div className="mb-5 flex justify-between border-b p-4 py-2">
        <IoIosArrowRoundBack
          size={28}
          className="cursor-pointer"
          onClick={cancelSelection}
        />
        <h1 className="text-base font-medium">Message</h1>
        <div />
      </div>

      <div className="px-4 border-b">
        <h1 className="text-sm mb-3 text-gray-500">Edit Text</h1>

        <textarea
          className="w-full p-2 mb-3 bg-white border-2 border-blue-500 rounded-lg font-medium"
          placeholder="Enter your message here..."
          value={selectedNode.data.value}
          onChange={(event) => updateSelectedNode(event.target.value)}
        />
      </div>
    </div>
  );
};

export default TextNodeEditor;
