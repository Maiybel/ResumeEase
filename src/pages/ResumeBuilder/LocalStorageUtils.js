// src/components/ResumeBuilder/LocalStorageUtils.js
export const saveResumeData = (data) => {
  try {
    localStorage.setItem("resumeBuilderData", JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Error saving resume data:", error);
    return false;
  }
};

export const loadResumeData = () => {
  try {
    const savedData = localStorage.getItem("resumeBuilderData");
    return savedData ? JSON.parse(savedData) : null;
  } catch (error) {
    console.error("Error loading resume data:", error);
    return null;
  }
};

export const clearResumeData = () => {
  try {
    localStorage.removeItem("resumeBuilderData");
    return true;
  } catch (error) {
    console.error("Error clearing resume data:", error);
    return false;
  }
};
