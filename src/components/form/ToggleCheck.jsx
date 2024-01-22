const ToggleCheck = () => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        id="tolerance-toggle"
        name="tolerance-toggle"
        onChange={() => {}}
        checked
      />
      <span className="slider round"></span>
    </label>
  );
};
export default ToggleCheck;
