const SectionInfo = (props) => {
  return (
    <div>
      <h5>{props.header}</h5>
      <p className="details-p">{props.para}</p>
    </div>
  );
};
export default SectionInfo;
