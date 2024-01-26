import document from "/document.svg";

export const DragDropUpload = (props) => {
  return (
    <div {...props.getRootProps()} className="upload-container">
      <input {...props.getInputProps()} />
      <div className="upload-container-inner">
        <div className="document-icon">
          <img src={document} alt="Document icon" />
        </div>
        <p className="upload-msg">
          Drag & Drop Here Or <span>Browse</span>
        </p>
        <ul>
          {props.uploadedFiles.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
