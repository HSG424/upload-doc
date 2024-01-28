import { Button } from ".";
import { formatBytes } from "../../../helpers/files";
import { DocumentIcon } from "../../form/icons/DocumentIcon";

export const DragDropUpload = (props) => {
  return (
    <>
      <div {...props.getRootProps()} className="upload-container">
        <input {...props.getInputProps()} />
        <div className="upload-container-inner">
          <DocumentIcon />
          <p className="upload-msg">
            Drag & Drop Here Or <span>Browse</span>
          </p>
        </div>
        <div className="btn-container">
          <Button type="button" text="Upload Manifest" />
        </div>
      </div>
      <div className="file-container">
        <ul>
          {props.uploadedFiles.map((file) => (
            <li key={file.name} className="file-row">
              <div>
                <DocumentIcon />
                <span className="file-name">{file.name}</span>
              </div>
              <div>{formatBytes(file.size, 1)}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
