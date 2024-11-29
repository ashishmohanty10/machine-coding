"use client";
import { useState } from "react";

export default function Home() {
  const [tabNames] = useState(["TAB-1", "TAB-2"]);
  const [tabContent] = useState([
    "This is the content for TAB-1. You can add more information here.",
    "This is the content for TAB-2. Here's more information for the second tab.",
  ]);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center border p-4 rounded-md">
        <div className="flex border-b p-1 mb-4">
          {tabNames.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleTabClick(idx)}
              className={`px-6 py-2 cursor-pointer ${
                activeTab === idx
                  ? "bg-blue-500 text-white"
                  : "bg-gray-500 text-black"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="w-full">
          <div className="p-4 text-slate-100 rounded-md">
            <h2 className="font-semibold text-xl">{tabNames[activeTab]}</h2>
            <p>{tabContent[activeTab]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
