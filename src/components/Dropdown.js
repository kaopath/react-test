import "./Dropdown.css";

function Dropdown(props) {
  return (
    <div>
      <select
        className="dd"
        onChange={(event) => props.onChange(event.target.value)}
      >
        <option value="">Select</option>
        {props.data.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
