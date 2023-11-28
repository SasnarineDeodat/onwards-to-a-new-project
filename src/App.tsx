import { useRef } from "react";
import Form from "./components/Form";
import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  function handleSave(data: unknown) {
    const extractedData = data as {
      name: string;
      age: string;
    };
    console.log(data);
  }
  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}
