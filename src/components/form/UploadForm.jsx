import { useState } from "react";

import { testingCentersArr } from "../../test-data/test-data.js";

import SectionInfo from "./SectionInfo";
import Button from "./Button.jsx";

import DownIcon from "./icons/DownIcon";
import ClockIcon from "./icons/ClockIcon.jsx";

const UploadForm = (props) => {
  //const [testingCenters, setTestingCenters] = useState([
  const [testingCenters] = useState(testingCentersArr);

  return (
    <form>
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
            <label className="switch">
              <input
                type="checkbox"
                id="tolerance-toggle"
                name="tolerance-toggle"
                onChange={() => {}}
                checked
              />
              <span className="slider round"></span>
            </label>
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
              <input
                type="radio"
                name="split-sched"
                onChange={() => {}}
                checked
              />
              <label className="">Yes</label>

              <input type="radio" name="split-sched" />
              <label className="">No</label>
            </div>
          </div>

          <hr align="left" />

          <SectionInfo header="Location Checking:" para="All Available!" />
          <hr align="left" />

          <div className="client-centers-margin">
            <h5 className="">Client:</h5>
            <div className="radio-container">
              <input type="radio" name="client-centers" />
              <label className="">Single</label>

              <input
                type="radio"
                name="client-centers"
                onChange={() => {}}
                checked
              />
              <label className="">Multiple</label>
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
