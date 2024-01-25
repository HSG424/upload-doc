import DownIcon from "./icons/DownIcon";
import ClockIcon from "./icons/ClockIcon";

const getTestingCenterVal = (id) => {
  console.log(id);
  return "label";
};

const TestingCenters = (props) => {
  return (
    <>
      {props.testCenters.map((center) => (
        <div className="select-row-sm" key={center.id}>
          <label htmlFor="">{center.label}</label>
          <div className="select-container fixed-width">
            <select
              name={`testing-center-${center.id}-client`}
              id={`testing-center-${center.id}-client`}
              data-center-id={center.id}
              onChange={props.onChange}
              className="select-box select-box-sm"
              value={getTestingCenterVal(center.id)}
            >
              <option value="label" disabled>
                Select Client
              </option>
              {center.clients.map((client) => (
                <option value={client.value} key={client.id}>
                  {client.label}
                </option>
              ))}
            </select>
            <DownIcon />
          </div>
          <ClockIcon />
        </div>
      ))}
    </>
  );
};
export default TestingCenters;
