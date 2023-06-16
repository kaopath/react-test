import "./Step.css";
import Dropdown from "./Dropdown";
import Input from "./Input";

function Step(props) {
  return (
    <div className="step">
      <span>{props.data.title}</span>
      {props.data.controls.map((control) => {
        switch (control.type) {
          case "dd":
            return <Dropdown data={control.data} onChange={control.onchange} />;
          case "input":
            return <Input data={control.data} onChange={control.onchange} />;
        }
      })}
      {props.data.next != null ? (
        <button type="button" onClick={()=>props.navBtnClick(props.data.next.step)}>
          {props.data.next.title}
        </button>
      ) : null}
    </div>
  );
}

export default Step;
