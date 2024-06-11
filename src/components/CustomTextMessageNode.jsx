import { BiCommentDetail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import CustomHandle from "./CustomHandle";
import { Position } from "reactflow";

/**
 * Custom Text Message Node used to display a new Node
 */
const CustomTextMessageNode = ({ data, ...props }) => {
  return (
    <div className="flex-col border border-gray-900 min-w-72 bg-white rounded-lg overflow-hidden">
      <div className="flex justify-between p-2 border-b border-gray-900 bg-green-300">
        <div className="border-4 border-white bg-gray-100 rounded-full">
          <BiCommentDetail size={16} />
        </div>
        <p className="text-xs">Send Message</p>
        <div className="border-4 border-white rounded-full bg-white">
          <IoLogoWhatsapp size={16} className="text-[#25D366]" />
        </div>
      </div>

      <div className="p-2 py-4">
        {data.value && (
          <h1
            className="text-sm text-center whitespace-pre-line"
            onClick={() => data.onClick()}
          >
            {data.value}
          </h1>
        )}
      </div>

      {/* we can create */}
      <CustomHandle type="target" position={Position.Left} />
      <CustomHandle type="source" position={Position.Right} />
    </div>
  );
};

export default CustomTextMessageNode;
