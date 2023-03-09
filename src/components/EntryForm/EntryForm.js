import "./EntryForm.css";

export default function EntryForm({ children }) {
  return (
    <form className="entryForm">
      <fildset className="entryInputs__fieldsets">{children}</fildset>
    </form>
  );
}
