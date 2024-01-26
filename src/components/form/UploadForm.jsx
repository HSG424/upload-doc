import { useState } from "react";
import {
  Button,
  Label,
  RadioBtn,
  ToggleCheck,
  SectionInfo,
  TestingCenters,
  BigSelect,
} from "./elements";
import { useDropzone } from "react-dropzone";
import { ClockIcon } from "./icons";
import { importNames, testingCentersData } from "../../test-data/test-data.js";

const noSelectedCenters = {
  center1: "",
  center2: "",
  center3: "",
  center4: "",
};

const UploadForm = (props) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });

  const [importName, setImportName] = useState("");

  const [splitSched, setSplitSched] = useState("Yes");
  const [clientMode, setClientMode] = useState("Multiple");
  const [toleranceChecked, setToleranceChecked] = useState(true);

  const [testCentersData, setTestCentersData] = useState(testingCentersData);

  const [testingCenters, setTestingCenters] = useState(noSelectedCenters);

  const importNameHandler = (event) => {
    setImportName(event.target.value);
  };

  const toleranceCheckedHandler = () => {
    setToleranceChecked((prevVal) => !prevVal);
  };

  const splitSchedHandler = (event) => {
    setSplitSched(event.target.value);
  };

  const clientModeHandler = (event) => {
    setClientMode(event.target.value);
    setTestingCenters(noSelectedCenters);
    setTestCentersData(
      event.target.value === "Multiple"
        ? testingCentersData
        : [testingCentersData[0]]
    );
  };

  const testingCentersHandler = (event) => {
    setTestingCenters((prevVal) => {
      return {
        ...prevVal,
        [`center${event.target.getAttribute("data-center-id")}`]:
          event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("=====FORM=SUBMIT=====");
    console.log("Select Import Name: ", importName || "nothing selected!");

    // uploaded files info
    console.log("Files Data: ", uploadedFiles);
    const fileNamesStr = uploadedFiles.map((el) => el.name).join(", ");
    console.log("Files Uploaded: ", fileNamesStr);

    console.log("Tolerance Window: ", toleranceChecked);
    console.log("Split Schedule using social distancing?", splitSched);
    console.log("Client Type: ", clientMode);
    testingCenters.center1 &&
      console.log("Testing Center 1: ", testingCenters.center1);
    testingCenters.center2 &&
      console.log("Testing Center 2: ", testingCenters.center2);
    testingCenters.center3 &&
      console.log("Testing Center 3: ", testingCenters.center3);
    testingCenters.center4 &&
      console.log("Testing Center 4: ", testingCenters.center4);
    console.log("=====FORM=SUBMIT=====");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex-container">
        <div className="form-left-side">
          <BigSelect
            value={importName}
            onChange={importNameHandler}
            importNames={importNames}
          />
          <hr align="left" />
          <h5>Select a manifest that you&apos;d like to import</h5>

          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop files here or click to browse.</p>
            <ul>
              {uploadedFiles.map((file) => (
                <li key={file.name}>{file.name}</li>
              ))}
            </ul>
          </div>

          <hr align="left" />
          <SectionInfo
            header="Elapse Data Checking:"
            para="No Elapsed Dates!"
          />
          <hr align="left" />

          <h5>Tolerance Window:</h5>
          <div className="toggle-row">
            <ToggleCheck
              id="tolerance-toggle"
              name="tolerance-toggle"
              value={toleranceChecked}
              onChange={toleranceCheckedHandler}
            />
            <Label htmlFor="tolerance-toggle">Toggle ON</Label>

            <div className="select-tolerance">
              <ClockIcon />
              <p>Select Tolerance Level</p>
            </div>
          </div>
        </div>
        <div className="form-right-side">
          <div>
            <h5>Split Schedule using social distancing?</h5>
            <div className="radio-container">
              <RadioBtn
                name="splitSched"
                id="splitSchedYes"
                value="Yes"
                onChange={splitSchedHandler}
                checked={splitSched === "Yes"}
              />
              <Label htmlFor="splitSchedYes">Yes</Label>

              <RadioBtn
                name="splitSched"
                id="splitSchedNo"
                value="No"
                onChange={splitSchedHandler}
                checked={splitSched === "No"}
              />
              <Label htmlFor="splitSchedNo">No</Label>
            </div>
          </div>

          <hr align="left" />

          <SectionInfo header="Location Checking:" para="All Available!" />
          <hr align="left" />

          <div className="client-centers-margin">
            <h5>Client:</h5>
            <div className="radio-container">
              <RadioBtn
                name="clientCenters"
                id="singleClientCenter"
                value="Single"
                onChange={clientModeHandler}
                checked={clientMode === "Single"}
              />
              <Label htmlFor="singleClientCenter">Single</Label>

              <RadioBtn
                name="clientCenters"
                id="multipleClientCenter"
                value="Multiple"
                onChange={clientModeHandler}
                checked={clientMode === "Multiple"}
              />
              <Label htmlFor="multipleClientCenter">Multiple</Label>
            </div>
          </div>

          <TestingCenters
            testingCenters={testingCenters}
            testCentersData={testCentersData}
            onChange={testingCentersHandler}
          />
        </div>
      </div>
      <h3>
        Data in the import file is correct. Please press Continue to import.
      </h3>
      <div className="btn-container">
        <Button type="submit" text="Continue Import" />
        <Button type="button" text="Cancel" onClick={props.onModalClose} />
      </div>
    </form>
  );
};
export default UploadForm;
