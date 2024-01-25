import DownIcon from "./icons/DownIcon";

const BigSelect = () => {
  return (
    <div className="select-container">
      <select className="select-box">
        <option value="select-value-1">Select Import Name:</option>
        <option value="select-value-2">...</option>
        <option value="select-value-3">...</option>
      </select>
      <DownIcon />
    </div>
  );
};
export default BigSelect;
