import { useRef } from "react";
import Input from "./components/Input.tsx";

export default function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input label="Test" id="test" ref={input} />
    </main>
  );
}
