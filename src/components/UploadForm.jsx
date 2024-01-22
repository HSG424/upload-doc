import { useState } from "react";
import downIcon from "/down_icon.svg";
import clockIcon from "/clock.svg";
import xIcon from "/x-icon.svg";

const UploadForm = (props) => {
  //const [testingCenters, setTestingCenters] = useState([
  const [testingCenters] = useState([
    {
      id: 1,
      label: "Testing Center 1",
    },
    {
      id: 2,
      label: "Testing Center 2",
    },
    {
      id: 3,
      label: "Testing Center 3",
    },
    {
      id: 4,
      label: "Testing Center 4",
    },
    {
      id: 5,
      label: "Testing Center 5",
    },
    {
      id: 6,
      label: "Testing Center 6",
    },
    {
      id: 7,
      label: "Testing Center 7",
    },
    {
      id: 8,
      label: "Testing Center 8",
    },
  ]);

  return (
    <div>
      <div className="x-container" onClick={props.onModalClose}>
        <img src={xIcon} className="" alt="" />
      </div>
      <div className="main-container">
        <h1>Document Upload</h1>
        <hr />
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
                <div className="icon-container">
                  <img src={downIcon} className="" alt="" />
                </div>
              </div>
              <hr align="left" />
              <div>
                <h5 className="">Elapse Data Checking:</h5>
                <p className="details-p">No Elapsed Dates!</p>
              </div>
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
                  <div className="clock-container">
                    <img src={clockIcon} className="" alt="" />
                  </div>
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

              <div>
                <h5 className="">Location Checking:</h5>
                <p className="details-p">All Available!</p>
              </div>
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
                    <div className="icon-container">
                      <img src={downIcon} className="" alt="" />
                    </div>
                  </div>
                  <div className="clock-container">
                    <img src={clockIcon} className="" alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h3>
            Data in the import file is correct. Please press Continue to import.
          </h3>
          <div className="btn-container">
            <button type="submit">Continue Import</button>
            <button type="button" onClick={props.onModalClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UploadForm;
