import { Handle } from "reactflow";

/**
 * Custom Handle Component used to handle positioning and effects on Nodes
 */
const CustomHandle = ({ type, position }) => {
  return (
    <Handle
      type={type}
      position={position}
      style={{
        width: 10,
        height: 10,
        background: "white",
        border: "1px solid #000",
        backgroundColor: "rgb(75 85 99 / 1)",
      }}
    />
  );
};

export default CustomHandle;
