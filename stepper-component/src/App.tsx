import { Stepper } from "./components/stepper";

function App() {
  const steps = [
    {
      label: "Personal Info",
      content: <div>Personal Information Component</div>,
    },
    {
      label: "Account Info",
      content: <div>Account Information Component</div>,
    },
    {
      label: "Payment Info",
      content: <div>Payment Information Component</div>,
    },
    {
      label: "Confirmation",
      content: <div>Confirmation Information Component</div>,
    },
    {
      label: "Review",
      content: <div>Review Information Component</div>,
    },
  ];
  return (
    <>
      <Stepper steps={steps} />
    </>
  );
}

export default App;
