// src/components/ResumeBuilder/ResumeBuilder.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Save, Trash, Eye } from "lucide-react";

import Sidebar from "./Sidebar";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import ResumePreview from "./ResumePreview";

import { useResumeForm } from "../hooks/useResumeForm";
import { generatePDF } from "../utils/pdfExport";

const ResumeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const {
    formData,
    errors,
    updateField,
    addItem,
    removeItem,
    validateFormData,
    saveProgress,
    resetToInitial,
  } = useResumeForm();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetails
            data={formData.personalDetails}
            errors={errors.personalDetails || {}}
            onUpdate={(field, value) =>
              updateField("personalDetails", field, value)
            }
          />
        );
      case 2:
        return (
          <Experience
            data={formData.experience}
            errors={errors.experience || []}
            onUpdate={(index, field, value) =>
              updateField("experience", field, value, index)
            }
            onAdd={() => addItem("experience")}
            onRemove={(index) => removeItem("experience", index)}
          />
        );
      case 3:
        return (
          <Education
            data={formData.education}
            errors={errors.education || []}
            onUpdate={(index, field, value) =>
              updateField("education", field, value, index)
            }
            onAdd={() => addItem("education")}
            onRemove={(index) => removeItem("education", index)}
          />
        );
      case 4:
        return (
          <Skills
            data={formData.skills}
            onUpdate={(index, value) => updateField("skills", index, value)}
            onAdd={() => addItem("skills")}
            onRemove={(index) => removeItem("skills", index)}
          />
        );
      case 5:
        return (
          <Certifications
            data={formData.certifications}
            onUpdate={(index, field, value) =>
              updateField("certifications", field, value, index)
            }
            onAdd={() => addItem("certifications")}
            onRemove={(index) => removeItem("certifications", index)}
          />
        );
      default:
        return null;
    }
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handlePreview = () => {
    if (validateFormData()) {
      setIsPreviewMode(true);
    }
  };

  const handlePDFExport = () => {
    generatePDF("resume-preview");
  };

  if (isPreviewMode) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <div className="flex-1 ml-64 p-6">
          <div className="flex justify-end mb-4 space-x-2">
            <button
              onClick={() => setIsPreviewMode(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={handlePDFExport}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Export PDF
            </button>
          </div>
          <ResumePreview data={formData} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar currentStep={currentStep} onStepChange={setCurrentStep} />
      <div className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow-lg mb-6">
            <div className="p-6">{renderStep()}</div>
          </div>

          <div className="flex justify-between mt-6">
            <div className="space-x-2">
              <button
                onClick={saveProgress}
                className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2"
              >
                <Save className="w-4 h-4" /> Save Draft
              </button>
              <button
                onClick={resetToInitial}
                className="px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2"
              >
                <Trash className="w-4 h-4" /> Clear Data
              </button>
            </div>

            <div className="space-x-2">
              <button
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className={`px-4 py-2 rounded-lg ${
                  currentStep === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white border border-gray-300 hover:bg-gray-50"
                }`}
              >
                Previous
              </button>

              {currentStep < 5 ? (
                <button
                  onClick={handleNextStep}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2 inline" />
                </button>
              ) : (
                <button
                  onClick={handlePreview}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" /> Preview
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
