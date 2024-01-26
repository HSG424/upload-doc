import { DownIcon } from "../icons";

export const BigSelect = (props) => {
  return (
    <div className="select-container">
      <select
        className="select-box"
        value={props.value || "label"}
        onChange={props.onChange}
      >
        <option value="label" disabled>
          Select Import Name:
        </option>
        {props.importNames.map((importName) => (
          <option key={importName.id} value={importName.value}>
            {importName.label}
          </option>
        ))}
      </select>
      <DownIcon />
    </div>
  );
};
