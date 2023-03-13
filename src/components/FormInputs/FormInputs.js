import "./FormInputs.css";

export default function FormInputs({ inputId, children, rowsValue, name }) {
  return (
    <div className="formInputs">
      <label htmlFor={inputId}>{children}</label>
      <textarea
        type="text"
        name={name}
        cols={40}
        rows={rowsValue}
        id={inputId}
      ></textarea>
    </div>
  );
}
