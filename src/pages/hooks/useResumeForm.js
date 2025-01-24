// src/hooks/useResumeForm.js
import { useState, useCallback } from "react";
import {
  loadResumeData,
  saveResumeData,
  clearResumeData,
} from "../ResumeBuilder/LocalStorageUtils";
import { validateForm } from "../utils/validation";

const initialFormData = {
  personalDetails: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  experience: [
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  education: [
    {
      institution: "",
      degree: "",
      field: "",
      graduationDate: "",
      gpa: "",
    },
  ],
  skills: [""],
  certifications: [
    {
      name: "",
      issuer: "",
      date: "",
      url: "",
    },
  ],
};

export const useResumeForm = () => {
  const [formData, setFormData] = useState(
    () => loadResumeData() || initialFormData
  );
  const [errors, setErrors] = useState({});

  const updateField = useCallback((section, field, value, index = null) => {
    setFormData((prev) => {
      const newData = { ...prev };

      if (index !== null && Array.isArray(newData[section])) {
        newData[section] = [...newData[section]];
        newData[section][index] = {
          ...newData[section][index],
          [field]: value,
        };
      } else if (section === "skills") {
        newData.skills = [...newData.skills];
        newData.skills[index] = value;
      } else {
        newData[section] = {
          ...newData[section],
          [field]: value,
        };
      }

      return newData;
    });
  }, []);

  const addItem = useCallback((section) => {
    setFormData((prev) => {
      const newData = { ...prev };
      switch (section) {
        case "experience":
          newData.experience.push({
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: "",
          });
          break;
        case "education":
          newData.education.push({
            institution: "",
            degree: "",
            field: "",
            graduationDate: "",
            gpa: "",
          });
          break;
        case "skills":
          newData.skills.push("");
          break;
        case "certifications":
          newData.certifications.push({
            name: "",
            issuer: "",
            date: "",
            url: "",
          });
          break;
      }
      return newData;
    });
  }, []);

  const removeItem = useCallback((section, index) => {
    setFormData((prev) => {
      const newData = { ...prev };
      newData[section] = newData[section].filter((_, i) => i !== index);
      return newData;
    });
  }, []);

  const validateFormData = useCallback(() => {
    const validationResult = validateForm(formData);
    setErrors(validationResult.errors);
    return validationResult.isValid;
  }, [formData]);

  const saveProgress = useCallback(() => {
    const success = saveResumeData(formData);
    return success;
  }, [formData]);

  const resetToInitial = useCallback(() => {
    const success = clearResumeData();
    if (success) {
      setFormData(initialFormData);
      setErrors({});
    }
    return success;
  }, []);

  return {
    formData,
    errors,
    updateField,
    addItem,
    removeItem,
    validateFormData,
    saveProgress,
    resetToInitial,
  };
};
