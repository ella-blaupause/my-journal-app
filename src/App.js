import "./App.css";
import Content from "./components/content/Content";
import EntryForm from "./components/EntryForm/EntryForm";
import Footer from "./components/Footer/Footer";
import FormInputs from "./components/FormInputs/FormInputs";
import FormTitle from "./components/FormTitle/FormTitle";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Tabs from "./components/Tabs/Tabs";
import Entries from "./components/Entries/Entries";

function App() {
  return (
    <div>
      <Header>Journal</Header>
      <Content>
        <EntryForm>
          <FormTitle />
          <FormInputs inputId={"motto"} rowsValue={7}>
            Motto
          </FormInputs>
          <FormInputs inputId={"notes"} rowsValue={20}>
            Notes
          </FormInputs>
          <Button>Creat</Button>
        </EntryForm>

        <div className="entries-and-tabs">
          <Tabs />
          <Entries />
        </div>
      </Content>

      <Footer>Journal App — 2028</Footer>
    </div>
  );
}

export default App;
