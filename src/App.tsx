import Button from "./components/Button";
import Container from "./components/Container.tsx";

export default function App() {
  return (
    <main>
      <Container as={Button} />
    </main>
  );
}
