import Button from "../Button/Button";
import FormInputs from "../FormInputs/FormInputs";
import FormTitle from "../FormTitle/FormTitle";
import "./EntryForm.css";

export default function EntryForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    onAddEntry(data);

    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit} className="entryForm">
      <div className="entryInputs__fieldsets">
        <FormTitle />
        <FormInputs name="motto" inputId={"motto"} rowsValue={"2"}>
          Motto
        </FormInputs>
        <FormInputs name="notes" inputId={"notes"} rowsValue={"10"}>
          Notes
        </FormInputs>
        <Button>Creat</Button>
      </div>
    </form>
  );
}
