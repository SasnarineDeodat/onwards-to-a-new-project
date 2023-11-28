import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return (
    <main>
      <p>
        <Button el="button">A Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com">
          A Link
        </Button>
      </p>
    </main>
  );
}
