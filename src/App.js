import { Container, Segment } from "semantic-ui-react";
import TestView from "./components/TestView";


function App() {
  return (
    <Container>
      {/* segment with padding */}
      <Segment basic padded />

      {/* test components here */}
      <TestView />

      {/* placeholder segment */}
      <Segment basic placeholder />
    </Container>
  );
}

export default App;
