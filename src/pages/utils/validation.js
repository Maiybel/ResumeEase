// src/utils/validation.js
export const validatePersonalDetails = (personalDetails) => {
  const errors = {};

  if (!personalDetails.fullName.trim()) {
    errors.fullName = "Full Name is required";
  }

  if (!personalDetails.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(personalDetails.email)) {
    errors.email = "Invalid email format";
  }

  return errors;
};

export const validateExperience = (experiences) => {
  return experiences.map((exp) => {
    const errors = {};
    if (!exp.company.trim()) errors.company = "Company is required";
    if (!exp.position.trim()) errors.position = "Position is required";
    return Object.keys(errors).length > 0 ? errors : null;
  });
};

export const validateEducation = (education) => {
  return education.map((edu) => {
    const errors = {};
    if (!edu.institution.trim()) errors.institution = "Institution is required";
    if (!edu.degree.trim()) errors.degree = "Degree is required";
    return Object.keys(errors).length > 0 ? errors : null;
  });
};

export const validateForm = (formData) => {
  const errors = {
    personalDetails: validatePersonalDetails(formData.personalDetails),
    experience: validateExperience(formData.experience),
    education: validateEducation(formData.education),
  };

  return {
    isValid:
      Object.values(errors.personalDetails).length === 0 &&
      errors.experience.every((exp) => exp === null) &&
      errors.education.every((edu) => edu === null),
    errors,
  };
};
