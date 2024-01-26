export const RadioBtn = (props) => {
  return (
    <input
      type="radio"
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      checked={props.checked}
    />
  );
};
