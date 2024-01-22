import UploadForm from "./UploadForm";
import xIcon from "/x-icon.svg";

const UploadFormWrapper = (props) => {
  return (
    <div>
      <div className="x-container" onClick={props.onModalClose}>
        <img src={xIcon} className="" alt="" />
      </div>
      <div className="main-container">
        <h1>Document Upload</h1>
        <hr />
        <UploadForm onModalClose={props.onModalClose} />
      </div>
    </div>
  );
};
export default UploadFormWrapper;
