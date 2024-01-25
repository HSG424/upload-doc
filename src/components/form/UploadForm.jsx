import { useState, useRef } from "react";
import { testingCentersData } from "../../test-data/test-data.js";
import BigSelect from "./BigSelect";
import SectionInfo from "./SectionInfo";
import Button from "./Button";
import RadioBtn from "./RadioBtn";
import TestingCenters from "./TestingCenters";
import Label from "./Label";
import ToggleCheck from "./ToggleCheck";
import ClockIcon from "./icons/ClockIcon";

const UploadForm = (props) => {
  const [splitSched, setSplitSched] = useState("Yes");
  const [clientMode, setClientMode] = useState("Multiple");
  const [toleranceChecked, setToleranceChecked] = useState(true);

  const [testCentersData, setTestCentersData] = useState(testingCentersData);

  const [testingCenters, setTestingCenters] = useState({
    center1: "",
    center2: "",
    center3: "",
    center4: "",
  });

  const fileInputRef = useRef();

  const toleranceCheckedHandler = () => {
    setToleranceChecked((prevVal) => !prevVal);
  };

  const splitSchedHandler = (event) => {
    setSplitSched(event.target.value);
  };

  const clientModeHandler = (event) => {
    setClientMode(event.target.value);
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
    console.log(
      `Selected file - ${
        fileInputRef.current.files[0]?.name ?? "No file selected!"
      }`
    );
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

    console.log("!!!!!!!", testingCenters);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex-container">
        <div className="form-left-side">
          <label htmlFor="" className="display-none">
            Select Import Name:
          </label>
          <BigSelect />
          <hr align="left" />
          <h5>Select a manifest that you&apos;d like to import</h5>
          <input type="file" ref={fileInputRef} />
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
            <label htmlFor="tolerance-toggle">Toggle ON</label>
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
