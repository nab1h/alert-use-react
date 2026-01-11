import { BellRing,TriangleAlert } from "lucide-react";
import "./App.css";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <>
      <Alert
        title="warning"
        type="alert-warning"
        icon={<BellRing />}
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua"
      />
      <Alert
        title="alert-info"
        type="alert-info"
        icon={<TriangleAlert />}
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua"
      />
      <Alert
        title="alert-default"
        type="alert-default"
        icon={<BellRing />}
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua"
      />
      <Alert
        title="alert-error"
        type="alert-error"
        icon={<BellRing />}
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua"
      />
    </>
  );
}

export default App;
