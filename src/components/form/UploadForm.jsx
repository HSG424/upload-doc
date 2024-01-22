import { useState } from "react";

import { testingCentersArr } from "../../test-data/test-data.js";

import SectionInfo from "./SectionInfo";
import Button from "./Button";
import RadioBtn from "./RadioBtn";
import Label from "./Label";
import ToggleCheck from "./ToggleCheck";

import DownIcon from "./icons/DownIcon";
import ClockIcon from "./icons/ClockIcon.jsx";

const UploadForm = (props) => {
  //const [testingCenters, setTestingCenters] = useState([
  const [testingCenters] = useState(testingCentersArr);

  const [splitSched, setSplitSched] = useState("Yes");
  const [clientMode, setClientMode] = useState("Multiple");

  const splitSchedHandler = (event) => {
    setSplitSched(event.target.value);
  };

  const clientModeHandler = (event) => {
    setClientMode(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Split Schedule using social distancing?", splitSched);
    console.log("Client Type: ", clientMode);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex-container">
        <div className="form-left-side">
          <label htmlFor="" className="display-none">
            Select Import Name:
          </label>
          <div className="select-container">
            <select className="select-box">
              <option value="select-value-1">Select Import Name:</option>
              <option value="select-value-2">...</option>
              <option value="select-value-3">...</option>
            </select>
            <DownIcon />
          </div>
          <hr align="left" />
          <SectionInfo
            header="Elapse Data Checking:"
            para="No Elapsed Dates!"
          />
          <hr align="left" />

          <h5 className="">Tolerance Window:</h5>
          <div className="toggle-row">
            <ToggleCheck />
            <label htmlFor="tolerance-toggle">Toggle ON</label>
            <div className="select-tolerance">
              <ClockIcon />
              <p>Select Tolerance Level</p>
            </div>
          </div>
        </div>
        <div className="form-right-side">
          <div>
            <h5 className="">Split Schedule using social distancing?</h5>
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
            <h5 className="">Client:</h5>
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

          {testingCenters.map((center) => (
            <div className="select-row-sm" key={center.id}>
              <label htmlFor="" className="">
                {center.label}
              </label>
              <div className="select-container fixed-width">
                <select className="select-box select-box-sm">
                  <option value="select-value-1">Select Client</option>
                  <option value="select-value-2">...</option>
                  <option value="select-value-3">...</option>
                </select>
                <DownIcon />
              </div>
              <ClockIcon />
            </div>
          ))}
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
