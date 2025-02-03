import { useState } from "react";

interface StepProps {
  label: string;
  content: React.ReactNode;
}

interface StepperProps {
  steps: StepProps[];
}

export function Stepper({ steps }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepper">
      {steps.map(({ label }, idx) => (
        <div className="stepper-container" key={idx}>
          <div className={`step-number ${idx <= currentStep ? "active" : ""}`}>
            {idx + 1}
            {idx < steps.length - 1 && <div className="step-line"></div>}
          </div>
          <div>{label}</div>
        </div>
      ))}

      <div className="step-content">{steps[currentStep].content}</div>

      <div className="step-control">
        <button onClick={handleBack} disabled={currentStep === 0}>
          Back
        </button>
        <button
          onClick={handleContinue}
          disabled={currentStep === steps.length - 1}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
