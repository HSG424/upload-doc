const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick && props.onClick}>
      {props.text}
    </button>
  );
};
export default Button;
