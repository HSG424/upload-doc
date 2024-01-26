import { DownIcon, ClockIcon } from "../icons";
import { Label } from ".";

export const TestingCenters = (props) => {
  const getTestingCenterVal = (id) => {
    return props.testingCenters[`center${id}`] || "label";
  };

  return (
    <>
      {props.testCentersData.map((center) => (
        <div className="select-row-sm" key={center.id}>
          <Label htmlFor={`testing-center-${center.id}-client`}>
            {center.label}
          </Label>

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
