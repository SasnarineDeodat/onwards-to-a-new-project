import { useRef } from "react";
import Form from "./components/Form";
import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return (
    <main>
      <Form>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}
