const ToggleCheck = (props) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        checked={props.value}
      />
      <span className="slider round"></span>
    </label>
  );
};
export default ToggleCheck;
