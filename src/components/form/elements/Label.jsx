export const Label = (props) => {
  return <label htmlFor={props.htmlFor}>{props.children}</label>;
};
