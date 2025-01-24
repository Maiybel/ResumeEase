// src/components/ResumeBuilder/Sidebar.jsx
import React from "react";
import { User, Briefcase, GraduationCap, Code, Award } from "lucide-react";

const navigationItems = [
  { id: 1, title: "Personal Details", icon: User },
  { id: 2, title: "Experience", icon: Briefcase },
  { id: 3, title: "Education", icon: GraduationCap },
  { id: 4, title: "Skills", icon: Code },
  { id: 5, title: "Certifications", icon: Award },
];

const Sidebar = ({ currentStep, onStepChange }) => {
  return (
    <div className="w-64 bg-gray-50 h-screen fixed left-0 top-0 border-r border-gray-200 p-4">
      <h1 className="text-xl font-bold mb-6 px-4">Resume Builder</h1>
      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onStepChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentStep === item.id
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.title}</span>
              {currentStep === item.id && (
                <div className="w-2 h-2 rounded-full bg-blue-600 ml-auto" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
