import { useState } from "react";

import { ErrorState, UserData } from "../types/types";
import { tabConfig } from "../config/config";

export const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState<ErrorState>({});

  const [data, setData] = useState<UserData>({
    name: "Ashish Mohanty",
    age: 24,
    email: "test@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });

  const validateData = (): boolean => {
    const newErrors: ErrorState = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!data.age || data.age < 18) {
      newErrors.age = "Age must be 18 or older";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }

    if (data.interests.length === 0) {
      newErrors.interests = "Select at least one interest";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateData()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    if (validateData()) {
      console.log(data);
    }
  };

  const handlePrev = () => {
    setActiveTab((prev) => prev - 1);
  };

  const ActiveTabComp = tabConfig[activeTab].component;

  return (
    <div>
      <div className="tabs-container">
        {tabConfig.map((item, idx) => (
          <div className="tabs" onClick={() => setActiveTab(idx)}>
            {item.label}
          </div>
        ))}
      </div>

      <div className="tab-content">
        <ActiveTabComp
          data={data}
          setData={setData}
          errors={errors}
          setErrors={setErrors}
        />
      </div>

      <div>
        {activeTab >= 0 && (
          <button
            disabled={activeTab === tabConfig.length - 1}
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>

      <div>
        {activeTab < tabConfig.length - 1 && (
          <button onClick={handlePrev} disabled={activeTab === 0}>
            Prev
          </button>
        )}
      </div>

      <div>
        {activeTab === tabConfig.length - 1 && (
          <button onClick={handleSubmit}>submit</button>
        )}
      </div>
    </div>
  );
};
