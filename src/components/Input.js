import "./Input.css";

function Input(props) {
  return (
    <div>
      <input {...props.data}/>
    </div>
  );
}

export default Input;
