export const DragDropUpload = (props) => {
  return (
    <div {...props.getRootProps()}>
      <input {...props.getInputProps()} />
      <p>Drag and drop files here or click to browse.</p>
      <ul>
        {props.uploadedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};
