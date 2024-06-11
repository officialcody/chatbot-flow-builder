import { BezierEdge, EdgeLabelRenderer } from "reactflow";
import { FaCaretRight } from "react-icons/fa";

/*
 * Customizing the Edge between nodes
 */
const CustomEdge = (props) => {
  const { targetX, targetY } = props;

  return (
    <>
      <BezierEdge {...props} />

      {/* Render Icon */}
      <EdgeLabelRenderer>
        <FaCaretRight
          size={20}
          className="text-black"
          style={{
            transform: `translate(-50%, -50%) translate(${targetX}px, ${targetY}px)`,
          }}
          // transform={}
        />
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
