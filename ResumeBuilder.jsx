// // import React, { useState } from "react";
// // import { ChevronLeft, ChevronRight, Plus, Trash2 } from "lucide-react";

// // const ResumeBuilder = () => {
// //   const [step, setStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     personalDetails: {
// //       fullName: "",
// //       email: "",
// //       phone: "",
// //       location: "",
// //       summary: "",
// //     },
// //     experience: [
// //       {
// //         company: "",
// //         position: "",
// //         startDate: "",
// //         endDate: "",
// //         description: "",
// //       },
// //     ],
// //     education: [
// //       {
// //         institution: "",
// //         degree: "",
// //         field: "",
// //         graduationDate: "",
// //         gpa: "",
// //       },
// //     ],
// //     skills: [""],
// //     certifications: [
// //       {
// //         name: "",
// //         issuer: "",
// //         date: "",
// //         url: "",
// //       },
// //     ],
// //   });

// //   const handleInputChange = (section, field, value, index = null) => {
// //     setFormData((prev) => {
// //       if (index !== null) {
// //         const newSection = [...prev[section]];
// //         newSection[index] = { ...newSection[index], [field]: value };
// //         return { ...prev, [section]: newSection };
// //       }
// //       if (section === "personalDetails") {
// //         return {
// //           ...prev,
// //           personalDetails: { ...prev.personalDetails, [field]: value },
// //         };
// //       }
// //       return { ...prev, [section]: value };
// //     });
// //   };

// //   const addItem = (section) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [section]: [
// //         ...prev[section],
// //         section === "experience"
// //           ? {
// //               company: "",
// //               position: "",
// //               startDate: "",
// //               endDate: "",
// //               description: "",
// //             }
// //           : section === "education"
// //           ? {
// //               institution: "",
// //               degree: "",
// //               field: "",
// //               graduationDate: "",
// //               gpa: "",
// //             }
// //           : section === "certifications"
// //           ? {
// //               name: "",
// //               issuer: "",
// //               date: "",
// //               url: "",
// //             }
// //           : "",
// //       ],
// //     }));
// //   };

// //   const removeItem = (section, index) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [section]: prev[section].filter((_, i) => i !== index),
// //     }));
// //   };

// //   const renderPersonalDetails = () => (
// //     <div className="space-y-4">
// //       <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
// //       <input
// //         placeholder="Full Name"
// //         value={formData.personalDetails.fullName}
// //         onChange={(e) =>
// //           handleInputChange("personalDetails", "fullName", e.target.value)
// //         }
// //         className="w-full p-2 border rounded-lg"
// //       />
// //       <input
// //         placeholder="Email"
// //         type="email"
// //         value={formData.personalDetails.email}
// //         onChange={(e) =>
// //           handleInputChange("personalDetails", "email", e.target.value)
// //         }
// //         className="w-full p-2 border rounded-lg"
// //       />
// //       <input
// //         placeholder="Phone"
// //         value={formData.personalDetails.phone}
// //         onChange={(e) =>
// //           handleInputChange("personalDetails", "phone", e.target.value)
// //         }
// //         className="w-full p-2 border rounded-lg"
// //       />
// //       <input
// //         placeholder="Location"
// //         value={formData.personalDetails.location}
// //         onChange={(e) =>
// //           handleInputChange("personalDetails", "location", e.target.value)
// //         }
// //         className="w-full p-2 border rounded-lg"
// //       />
// //       <textarea
// //         placeholder="Professional Summary"
// //         value={formData.personalDetails.summary}
// //         onChange={(e) =>
// //           handleInputChange("personalDetails", "summary", e.target.value)
// //         }
// //         className="w-full p-2 border rounded-lg h-32"
// //       />
// //     </div>
// //   );

// //   const renderExperience = () => (
// //     <div className="space-y-6">
// //       <div className="flex justify-between items-center">
// //         <h2 className="text-2xl font-bold">Work Experience</h2>
// //         <button
// //           onClick={() => addItem("experience")}
// //           className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
// //         >
// //           <Plus className="w-4 h-4" />
// //           Add Experience
// //         </button>
// //       </div>
// //       {formData.experience.map((exp, index) => (
// //         <div key={index} className="p-4 border rounded-lg space-y-4">
// //           <div className="flex justify-between items-center">
// //             <h3 className="text-lg font-semibold">Experience {index + 1}</h3>
// //             <button
// //               onClick={() => removeItem("experience", index)}
// //               className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
// //             >
// //               <Trash2 className="w-4 h-4" />
// //             </button>
// //           </div>
// //           <input
// //             placeholder="Company"
// //             value={exp.company}
// //             onChange={(e) =>
// //               handleInputChange("experience", "company", e.target.value, index)
// //             }
// //             className="w-full p-2 border rounded-lg"
// //           />
// //           <input
// //             placeholder="Position"
// //             value={exp.position}
// //             onChange={(e) =>
// //               handleInputChange("experience", "position", e.target.value, index)
// //             }
// //             className="w-full p-2 border rounded-lg"
// //           />
// //           <div className="grid grid-cols-2 gap-4">
// //             <input
// //               type="date"
// //               placeholder="Start Date"
// //               value={exp.startDate}
// //               onChange={(e) =>
// //                 handleInputChange(
// //                   "experience",
// //                   "startDate",
// //                   e.target.value,
// //                   index
// //                 )
// //               }
// //               className="w-full p-2 border rounded-lg"
// //             />
// //             <input
// //               type="date"
// //               placeholder="End Date"
// //               value={exp.endDate}
// //               onChange={(e) =>
// //                 handleInputChange(
// //                   "experience",
// //                   "endDate",
// //                   e.target.value,
// //                   index
// //                 )
// //               }
// //               className="w-full p-2 border rounded-lg"
// //             />
// //           </div>
// //           <textarea
// //             placeholder="Description"
// //             value={exp.description}
// //             onChange={(e) =>
// //               handleInputChange(
// //                 "experience",
// //                 "description",
// //                 e.target.value,
// //                 index
// //               )
// //             }
// //             className="w-full p-2 border rounded-lg h-32"
// //           />
// //         </div>
// //       ))}
// //     </div>
// //   );

// //   const renderEducation = () => (
// //     <div className="space-y-6">
// //       <div className="flex justify-between items-center">
// //         <h2 className="text-2xl font-bold">Education</h2>
// //         <button
// //           onClick={() => addItem("education")}
// //           className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
// //         >
// //           <Plus className="w-4 h-4" />
// //           Add Education
// //         </button>
// //       </div>
// //       {formData.education.map((edu, index) => (
// //         <div key={index} className="p-4 border rounded-lg space-y-4">
// //           <div className="flex justify-between items-center">
// //             <h3 className="text-lg font-semibold">Education {index + 1}</h3>
// //             <button
// //               onClick={() => removeItem("education", index)}
// //               className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
// //             >
// //               <Trash2 className="w-4 h-4" />
// //             </button>
// //           </div>
// //           <input
// //             placeholder="Institution"
// //             value={edu.institution}
// //             onChange={(e) =>
// //               handleInputChange(
// //                 "education",
// //                 "institution",
// //                 e.target.value,
// //                 index
// //               )
// //             }
// //             className="w-full p-2 border rounded-lg"
// //           />
// //           <input
// //             placeholder="Degree"
// //             value={edu.degree}
// //             onChange={(e) =>
// //               handleInputChange("education", "degree", e.target.value, index)
// //             }
// //             className="w-full p-2 border rounded-lg"
// //           />
// //           <input
// //             placeholder="Field of Study"
// //             value={edu.field}
// //             onChange={(e) =>
// //               handleInputChange("education", "field", e.target.value, index)
// //             }
// //             className="w-full p-2 border rounded-lg"
// //           />
// //           <div className="grid grid-cols-2 gap-4">
// //             <input
// //               type="date"
// //               placeholder="Graduation Date"
// //               value={edu.graduationDate}
// //               onChange={(e) =>
// //                 handleInputChange(
// //                   "education",
// //                   "graduationDate",
// //                   e.target.value,
// //                   index
// //                 )
// //               }
// //               className="w-full p-2 border rounded-lg"
// //             />
// //             <input
// //               placeholder="GPA"
// //               value={edu.gpa}
// //               onChange={(e) =>
// //                 handleInputChange("education", "gpa", e.target.value, index)
// //               }
// //               className="w-full p-2 border rounded-lg"
// //             />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );

// //   const renderSkills = () => (
// //     <div className="space-y-6">
// //       <div className="flex justify-between items-center">
// //         <h2 className="text-2xl font-bold">Skills</h2>
// //         <button
// //           onClick={() => addItem("skills")}
// //           className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
// //         >
// //           <Plus className="w-4 h-4" />
// //           Add Skill
// //         </button>
// //       </div>
// //       <div className="space-y-4">
// //         {formData.skills.map((skill, index) => (
// //           <div key={index} className="flex gap-2">
// //             <input
// //               placeholder="Skill"
// //               value={skill}
// //               onChange={(e) =>
// //                 handleInputChange("skills", index, e.target.value)
// //               }
// //               className="w-full p-2 border rounded-lg"
// //             />
// //             <button
// //               onClick={() => removeItem("skills", index)}
// //               className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
// //             >
// //               <Trash2 className="w-4 h-4" />
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );

// //   const renderCertifications = () => (
// //     <div className="space-y-6">
// //       <div className="flex justify-between items-center">
// //         <h2 className="text-2xl font-bold">Certifications</h2>
// //         <button
// //           onClick={() => addItem("certifications")}
// //           className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
// //         >
// //           <Plus className="w-4 h-4" />
// //           Add Certification
// //         </button>
// //       </div>
// //       {formData.certifications.map((cert, index) => (
// //         <div key={index} className="p-4 border rounded-lg space-y-4">
// //           <div className="flex justify-between items-center">
// //             <h3 className="text-lg font-semibold">Certification {index + 1}</h3>
// //             <button
// //               onClick={() => removeItem("certifications", index)}
// //               className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
// //             >
// //               <Trash2 className="w-4 h-4" />
// //             </button>
// //           </div>
// //           <input
// //             placeholder="Certification Name"
// //             value={cert.name}
// //             onChange={(e) =>
// //               handleInputChange("certifications", "name", e.target.value, index)
// //             }
// //             className="w-full p-2 border rounded-lg"
// //           />
// //           <input
// //             placeholder="Issuing Organization"
// //             value={cert.issuer}
// //             onChange={(e) =>
// //               handleInputChange(
// //                 "certifications",
// //                 "issuer",
// //                 e.target.value,
// //                 index
// //               )
// //             }
// //             className="w-full p-2 border rounded-lg"
// //           />
// //           <div className="grid grid-cols-2 gap-4">
// //             <input
// //               type="date"
// //               placeholder="Issue Date"
// //               value={cert.date}
// //               onChange={(e) =>
// //                 handleInputChange(
// //                   "certifications",
// //                   "date",
// //                   e.target.value,
// //                   index
// //                 )
// //               }
// //               className="w-full p-2 border rounded-lg"
// //             />
// //             <input
// //               placeholder="Certificate URL"
// //               value={cert.url}
// //               onChange={(e) =>
// //                 handleInputChange(
// //                   "certifications",
// //                   "url",
// //                   e.target.value,
// //                   index
// //                 )
// //               }
// //               className="w-full p-2 border rounded-lg"
// //             />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );

// //   const renderStep = () => {
// //     switch (step) {
// //       case 1:
// //         return renderPersonalDetails();
// //       case 2:
// //         return renderExperience();
// //       case 3:
// //         return renderEducation();
// //       case 4:
// //         return renderSkills();
// //       case 5:
// //         return renderCertifications();
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto p-6">
// //       <div className="bg-white rounded-lg shadow-lg mb-6">
// //         <div className="p-6">{renderStep()}</div>
// //       </div>

// //       <div className="flex justify-between mt-6">
// //         <button
// //           onClick={() => setStep((prev) => prev - 1)}
// //           disabled={step === 1}
// //           className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
// //             step === 1
// //               ? "bg-gray-100 text-gray-400 cursor-not-allowed"
// //               : "bg-white border border-gray-300 hover:bg-gray-50"
// //           }`}
// //         >
// //           <ChevronLeft className="w-4 h-4" />
// //           Previous
// //         </button>
// //         <div className="space-x-2">
// //           <button
// //             onClick={() => setStep((prev) => prev + 1)}
// //             disabled={step === 5}
// //             className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
// //               step === 5
// //                 ? "bg-gray-100 text-gray-400 cursor-not-allowed"
// //                 : "bg-white border border-gray-300 hover:bg-gray-50"
// //             }`}
// //           >
// //             Next
// //             <ChevronRight className="w-4 h-4" />
// //           </button>
// //           {step === 5 && (
// //             <button
// //               onClick={() => console.log(formData)}
// //               className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
// //             >
// //               Generate Resume
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ResumeBuilder;

// // ////////////////////////////

// // import React, { useState } from "react";
// // import {
// //   ChevronLeft,
// //   ChevronRight,
// //   Plus,
// //   Trash2,
// //   User,
// //   Briefcase,
// //   GraduationCap,
// //   Code,
// //   Award,
// // } from "lucide-react";

// // const ResumeBuilder = () => {
// //   const [step, setStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     personalDetails: {
// //       fullName: "",
// //       email: "",
// //       phone: "",
// //       location: "",
// //       summary: "",
// //     },
// //     experience: [
// //       {
// //         company: "",
// //         position: "",
// //         startDate: "",
// //         endDate: "",
// //         description: "",
// //       },
// //     ],
// //     education: [
// //       {
// //         institution: "",
// //         degree: "",
// //         field: "",
// //         graduationDate: "",
// //         gpa: "",
// //       },
// //     ],
// //     skills: [""],
// //     certifications: [
// //       {
// //         name: "",
// //         issuer: "",
// //         date: "",
// //         url: "",
// //       },
// //     ],
// //   });

// //   const navigationItems = [
// //     { id: 1, title: "Personal Details", icon: User },
// //     { id: 2, title: "Experience", icon: Briefcase },
// //     { id: 3, title: "Education", icon: GraduationCap },
// //     { id: 4, title: "Skills", icon: Code },
// //     { id: 5, title: "Certifications", icon: Award },
// //   ];

// //   const handleInputChange = (section, field, value, index = null) => {
// //     setFormData((prev) => {
// //       if (index !== null) {
// //         const newSection = [...prev[section]];
// //         newSection[index] = { ...newSection[index], [field]: value };
// //         return { ...prev, [section]: newSection };
// //       }
// //       if (section === "personalDetails") {
// //         return {
// //           ...prev,
// //           personalDetails: { ...prev.personalDetails, [field]: value },
// //         };
// //       }
// //       return { ...prev, [section]: value };
// //     });
// //   };

// //   const addItem = (section) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [section]: [
// //         ...prev[section],
// //         section === "experience"
// //           ? {
// //               company: "",
// //               position: "",
// //               startDate: "",
// //               endDate: "",
// //               description: "",
// //             }
// //           : section === "education"
// //           ? {
// //               institution: "",
// //               degree: "",
// //               field: "",
// //               graduationDate: "",
// //               gpa: "",
// //             }
// //           : section === "certifications"
// //           ? {
// //               name: "",
// //               issuer: "",
// //               date: "",
// //               url: "",
// //             }
// //           : "",
// //       ],
// //     }));
// //   };

// //   const removeItem = (section, index) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [section]: prev[section].filter((_, i) => i !== index),
// //     }));
// //   };

// //   // const renderPersonalDetails = () => (
// //   //   <div className="space-y-4">
// //   //     <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
// //   //     <input
// //   //       placeholder="Full Name"
// //   //       value={formData.personalDetails.fullName}
// //   //       onChange={(e) =>
// //   //         handleInputChange("personalDetails", "fullName", e.target.value)
// //   //       }
// //   //       className="w-full p-2 border rounded-lg"
// //   //     />
// //   //     <input
// //   //       placeholder="Email"
// //   //       type="email"
// //   //       value={formData.personalDetails.email}
// //   //       onChange={(e) =>
// //   //         handleInputChange("personalDetails", "email", e.target.value)
// //   //       }
// //   //       className="w-full p-2 border rounded-lg"
// //   //     />
// //   //     <input
// //   //       placeholder="Phone"
// //   //       value={formData.personalDetails.phone}
// //   //       onChange={(e) =>
// //   //         handleInputChange("personalDetails", "phone", e.target.value)
// //   //       }
// //   //       className="w-full p-2 border rounded-lg"
// //   //     />
// //   //     <input
// //   //       placeholder="Location"
// //   //       value={formData.personalDetails.location}
// //   //       onChange={(e) =>
// //   //         handleInputChange("personalDetails", "location", e.target.value)
// //   //       }
// //   //       className="w-full p-2 border rounded-lg"
// //   //     />
// //   //     <textarea
// //   //       placeholder="Professional Summary"
// //   //       value={formData.personalDetails.summary}
// //   //       onChange={(e) =>
// //   //         handleInputChange("personalDetails", "summary", e.target.value)
// //   //       }
// //   //       className="w-full p-2 border rounded-lg h-32"
// //   //     />
// //   //   </div>
// //   // );

// import React, { useState, useEffect } from "react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Plus,
//   Trash2,
//   User,
//   Briefcase,
//   GraduationCap,
//   Code,
//   Award,
//   Save,
//   Trash,
//   FileText,
//   Eye,
// } from "lucide-react";

// const ResumeBuilder = () => {
//   const [step, setStep] = useState(1);
//   const [isPreviewMode, setIsPreviewMode] = useState(false);
//   const [errors, setErrors] = useState({
//     personalDetails: {},
//     experience: [],
//     education: [],
//     certifications: [],
//   });
//   const [formData, setFormData] = useState({
//     personalDetails: {
//       fullName: "",
//       email: "",
//       phone: "",
//       location: "",
//       summary: "",
//     },
//     experience: [
//       {
//         company: "",
//         position: "",
//         startDate: "",
//         endDate: "",
//         description: "",
//       },
//     ],
//     education: [
//       {
//         institution: "",
//         degree: "",
//         field: "",
//         graduationDate: "",
//         gpa: "",
//       },
//     ],
//     skills: [""],
//     certifications: [
//       {
//         name: "",
//         issuer: "",
//         date: "",
//         url: "",
//       },
//     ],
//   });

//   // Local Storage Integration
//   // useEffect(() => {
//   //   const savedData = localStorage.getItem("resumeBuilderData");
//   //   if (savedData) {
//   //     setFormData(JSON.parse(savedData));
//   //   }
//   // }, []);

//   useEffect(() => {
//     // Load saved data on component mount
//     const savedData = localStorage.getItem('resumeBuilderData');
//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//     }
//   }, []);

//   const saveProgress = () => {
//     localStorage.setItem('resumeBuilderData', JSON.stringify(formData));
//     alert('Resume draft saved successfully');
//   };

//   const clearSavedData = () => {
//     localStorage.removeItem('resumeBuilderData');
//     setFormData({
//       personalDetails: {
//         fullName: "",
//         email: "",
//         phone: "",
//         location: "",
//         summary: "",
//       },
//       experience: [
//         {
//           company: "",
//           position: "",
//           startDate: "",
//           endDate: "",
//           description: "",
//         },
//       ],
//       education: [
//         {
//           institution: "",
//           degree: "",
//           field: "",
//           graduationDate: "",
//           gpa: "",
//         },
//       ],
//       skills: [""],
//       certifications: [
//         {
//           name: "",
//           issuer: "",
//           date: "",
//           url: "",
//         },
//       ],
//     });
//   };

//   // Validation Function

//   // const validateForm = () => {
//   //   const newErrors = {
//   //     personalDetails: {},
//   //     experience: [],
//   //     education: [],
//   //     certifications: [],
//   //   };
//   const [errors, setErrors] = useState({
//     personalDetails: {},
//     experience: [],
//     education: [],
//     certifications: []
//   });

//   const validateForm = () => {
//     const newErrors = {
//       personalDetails: {},
//       experience: [],
//       education: [],
//       certifications: []
//     };

//     // Personal Details Validation
//     if (!formData.personalDetails.fullName.trim()) {
//       newErrors.personalDetails.fullName = "Full Name is required";
//     }
//     if (!formData.personalDetails.email.trim()) {
//       newErrors.personalDetails.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.personalDetails.email)) {
//       newErrors.personalDetails.email = "Invalid email format";
//     }

//     // Experience Validation
//     formData.experience.forEach((exp, index) => {
//       const expErrors = {};
//       if (!exp.company.trim()) expErrors.company = "Company is required";
//       if (!exp.position.trim()) expErrors.position = "Position is required";
//       if (expErrors.company || expErrors.position) {
//         newErrors.experience[index] = expErrors;
//       }
//     });

//     // Education Validation
//     formData.education.forEach((edu, index) => {
//       const eduErrors = {};
//       if (!edu.institution.trim()) eduErrors.institution = "Institution is required";
//       if (!edu.degree.trim()) eduErrors.degree = "Degree is required";
//       if (eduErrors.institution || eduErrors.degree) {
//         newErrors.education[index] = eduErrors;
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors.personalDetails).length === 0 &&
//            newErrors.experience.length === 0 &&
//            newErrors.education.length === 0;
//   };

//     // Personal Details Validation
//     if (!formData.personalDetails.fullName.trim()) {
//       newErrors.personalDetails.fullName = "Full Name is required";
//     }
//     if (!formData.personalDetails.email.trim()) {
//       newErrors.personalDetails.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.personalDetails.email)) {
//       newErrors.personalDetails.email = "Invalid email format";
//     }

//     // Experience Validation
//     formData.experience.forEach((exp, index) => {
//       const expErrors = {};
//       if (!exp.company.trim()) expErrors.company = "Company is required";
//       if (!exp.position.trim()) expErrors.position = "Position is required";
//       if (expErrors.company || expErrors.position) {
//         newErrors.experience[index] = expErrors;
//       }
//     });

//     // Education Validation
//     formData.education.forEach((edu, index) => {
//       const eduErrors = {};
//       if (!edu.institution.trim())
//         eduErrors.institution = "Institution is required";
//       if (!edu.degree.trim()) eduErrors.degree = "Degree is required";
//       if (eduErrors.institution || eduErrors.degree) {
//         newErrors.education[index] = eduErrors;
//       }
//     });

//     setErrors(newErrors);
//     return (
//       Object.keys(newErrors.personalDetails).length === 0 &&
//       newErrors.experience.length === 0 &&
//       newErrors.education.length === 0
//     );
//   };

//   // Save and Clear Functions
//   const saveProgress = () => {
//     localStorage.setItem("resumeBuilderData", JSON.stringify(formData));
//     alert("Resume draft saved successfully");
//   };

//   const clearSavedData = () => {
//     localStorage.removeItem("resumeBuilderData");
//     setFormData({
//       personalDetails: {
//         fullName: "",
//         email: "",
//         phone: "",
//         location: "",
//         summary: "",
//       },
//       experience: [
//         {
//           company: "",
//           position: "",
//           startDate: "",
//           endDate: "",
//           description: "",
//         },
//       ],
//       education: [
//         {
//           institution: "",
//           degree: "",
//           field: "",
//           graduationDate: "",
//           gpa: "",
//         },
//       ],
//       skills: [""],
//       certifications: [
//         {
//           name: "",
//           issuer: "",
//           date: "",
//           url: "",
//         },
//       ],
//     });
//   };

//   // PDF Export Function
//   const generatePDF = async () => {
//     const input = document.getElementById("resume-preview");
//     const canvas = await html2canvas(input);
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF();
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("resume.pdf");
//   };

//   // Preview Component
//   const ResumePreview = () => (
//     <div id="resume-preview" className="p-8 bg-white shadow-lg">
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold">
//           {formData.personalDetails.fullName}
//         </h1>
//         <p className="text-gray-600">
//           {formData.personalDetails.email} | {formData.personalDetails.phone}
//         </p>
//         <p className="text-gray-500 mt-2">
//           {formData.personalDetails.location}
//         </p>
//       </div>

//       <section className="mb-4">
//         <h2 className="text-xl font-semibold border-b mb-2">
//           Professional Summary
//         </h2>
//         <p>{formData.personalDetails.summary}</p>
//       </section>

//       <section className="mb-4">
//         <h2 className="text-xl font-semibold border-b mb-2">Work Experience</h2>
//         {formData.experience.map((exp, index) => (
//           <div key={index} className="mb-3">
//             <h3 className="font-medium">
//               {exp.position} at {exp.company}
//             </h3>
//             <p className="text-gray-600">
//               {exp.startDate} - {exp.endDate}
//             </p>
//             <p>{exp.description}</p>
//           </div>
//         ))}
//       </section>

//       <section className="mb-4">
//         <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
//         {formData.education.map((edu, index) => (
//           <div key={index} className="mb-3">
//             <h3 className="font-medium">
//               {edu.degree} - {edu.institution}
//             </h3>
//             <p className="text-gray-600">Graduation: {edu.graduationDate}</p>
//             {edu.gpa && <p>GPA: {edu.gpa}</p>}
//           </div>
//         ))}
//       </section>

//       {formData.skills.length > 0 && (
//         <section>
//           <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>
//           <ul className="flex flex-wrap gap-2">
//             {formData.skills.map((skill, index) => (
//               <li
//                 key={index}
//                 className="bg-gray-100 px-2 py-1 rounded-md text-sm"
//               >
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </section>
//       )}
//     </div>
//   );

//   const renderPersonalDetails = () => (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold">Personal Details</h2>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700">
//             Full Name
//           </label>
//           <input
//             placeholder="Enter your full name"
//             value={formData.personalDetails.fullName}
//             onChange={(e) =>
//               handleInputChange("personalDetails", "fullName", e.target.value)
//             }
//             className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 transition-all"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your email address"
//             value={formData.personalDetails.email}
//             onChange={(e) =>
//               handleInputChange("personalDetails", "email", e.target.value)
//             }
//             className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 transition-all"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             placeholder="Enter your phone number"
//             value={formData.personalDetails.phone}
//             onChange={(e) =>
//               handleInputChange("personalDetails", "phone", e.target.value)
//             }
//             className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 transition-all"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700">
//             Location
//           </label>
//           <input
//             placeholder="City, Country"
//             value={formData.personalDetails.location}
//             onChange={(e) =>
//               handleInputChange("personalDetails", "location", e.target.value)
//             }
//             className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 transition-all"
//           />
//         </div>
//       </div>

//       <div className="space-y-2">
//         <label className="block text-sm font-medium text-gray-700">
//           Professional Summary
//         </label>
//         <textarea
//           placeholder="Write a brief summary about your professional background and career objectives"
//           value={formData.personalDetails.summary}
//           onChange={(e) =>
//             handleInputChange("personalDetails", "summary", e.target.value)
//           }
//           className="w-full p-2 border rounded-lg h-32 focus:ring-2 focus:ring-blue-200 transition-all"
//         />
//       </div>
//     </div>
//   );

//   const renderExperience = () => (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Work Experience</h2>
//         <button
//           onClick={() => addItem("experience")}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
//         >
//           <Plus className="w-4 h-4" />
//           Add Experience
//         </button>
//       </div>
//       {formData.experience.map((exp, index) => (
//         <div key={index} className="p-4 border rounded-lg space-y-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-lg font-semibold">Experience {index + 1}</h3>
//             <button
//               onClick={() => removeItem("experience", index)}
//               className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
//             >
//               <Trash2 className="w-4 h-4" />
//             </button>
//           </div>
//           <input
//             placeholder="Company"
//             value={exp.company}
//             onChange={(e) =>
//               handleInputChange("experience", "company", e.target.value, index)
//             }
//             className="w-full p-2 border rounded-lg"
//           />
//           <input
//             placeholder="Position"
//             value={exp.position}
//             onChange={(e) =>
//               handleInputChange("experience", "position", e.target.value, index)
//             }
//             className="w-full p-2 border rounded-lg"
//           />
//           <div className="grid grid-cols-2 gap-4">
//             <input
//               type="date"
//               placeholder="Start Date"
//               value={exp.startDate}
//               onChange={(e) =>
//                 handleInputChange(
//                   "experience",
//                   "startDate",
//                   e.target.value,
//                   index
//                 )
//               }
//               className="w-full p-2 border rounded-lg"
//             />
//             <input
//               type="date"
//               placeholder="End Date"
//               value={exp.endDate}
//               onChange={(e) =>
//                 handleInputChange(
//                   "experience",
//                   "endDate",
//                   e.target.value,
//                   index
//                 )
//               }
//               className="w-full p-2 border rounded-lg"
//             />
//           </div>
//           <textarea
//             placeholder="Description"
//             value={exp.description}
//             onChange={(e) =>
//               handleInputChange(
//                 "experience",
//                 "description",
//                 e.target.value,
//                 index
//               )
//             }
//             className="w-full p-2 border rounded-lg h-32"
//           />
//         </div>
//       ))}
//     </div>
//   );

//   const renderEducation = () => (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Education</h2>
//         <button
//           onClick={() => addItem("education")}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
//         >
//           <Plus className="w-4 h-4" />
//           Add Education
//         </button>
//       </div>
//       {formData.education.map((edu, index) => (
//         <div key={index} className="p-4 border rounded-lg space-y-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-lg font-semibold">Education {index + 1}</h3>
//             <button
//               onClick={() => removeItem("education", index)}
//               className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
//             >
//               <Trash2 className="w-4 h-4" />
//             </button>
//           </div>
//           <input
//             placeholder="Institution"
//             value={edu.institution}
//             onChange={(e) =>
//               handleInputChange(
//                 "education",
//                 "institution",
//                 e.target.value,
//                 index
//               )
//             }
//             className="w-full p-2 border rounded-lg"
//           />
//           <input
//             placeholder="Degree"
//             value={edu.degree}
//             onChange={(e) =>
//               handleInputChange("education", "degree", e.target.value, index)
//             }
//             className="w-full p-2 border rounded-lg"
//           />
//           <input
//             placeholder="Field of Study"
//             value={edu.field}
//             onChange={(e) =>
//               handleInputChange("education", "field", e.target.value, index)
//             }
//             className="w-full p-2 border rounded-lg"
//           />
//           <div className="grid grid-cols-2 gap-4">
//             <input
//               type="date"
//               placeholder="Graduation Date"
//               value={edu.graduationDate}
//               onChange={(e) =>
//                 handleInputChange(
//                   "education",
//                   "graduationDate",
//                   e.target.value,
//                   index
//                 )
//               }
//               className="w-full p-2 border rounded-lg"
//             />
//             <input
//               placeholder="GPA"
//               value={edu.gpa}
//               onChange={(e) =>
//                 handleInputChange("education", "gpa", e.target.value, index)
//               }
//               className="w-full p-2 border rounded-lg"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   const renderSkills = () => (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Skills</h2>
//         <button
//           onClick={() => addItem("skills")}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
//         >
//           <Plus className="w-4 h-4" />
//           Add Skill
//         </button>
//       </div>
//       <div className="space-y-4">
//         {formData.skills.map((skill, index) => (
//           <div key={index} className="flex gap-2">
//             <input
//               placeholder="Skill"
//               value={skill}
//               onChange={(e) =>
//                 handleInputChange("skills", index, e.target.value)
//               }
//               className="w-full p-2 border rounded-lg"
//             />
//             <button
//               onClick={() => removeItem("skills", index)}
//               className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
//             >
//               <Trash2 className="w-4 h-4" />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderCertifications = () => (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Certifications</h2>
//         <button
//           onClick={() => addItem("certifications")}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600"
//         >
//           <Plus className="w-4 h-4" />
//           Add Certification
//         </button>
//       </div>
//       {formData.certifications.map((cert, index) => (
//         <div key={index} className="p-4 border rounded-lg space-y-4">
//           <div className="flex justify-between items-center">
//             <h3 className="text-lg font-semibold">Certification {index + 1}</h3>
//             <button
//               onClick={() => removeItem("certifications", index)}
//               className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
//             >
//               <Trash2 className="w-4 h-4" />
//             </button>
//           </div>
//           <input
//             placeholder="Certification Name"
//             value={cert.name}
//             onChange={(e) =>
//               handleInputChange("certifications", "name", e.target.value, index)
//             }
//             className="w-full p-2 border rounded-lg"
//           />
//           <input
//             placeholder="Issuing Organization"
//             value={cert.issuer}
//             onChange={(e) =>
//               handleInputChange(
//                 "certifications",
//                 "issuer",
//                 e.target.value,
//                 index
//               )
//             }
//             className="w-full p-2 border rounded-lg"
//           />
//           <div className="grid grid-cols-2 gap-4">
//             <input
//               type="date"
//               placeholder="Issue Date"
//               value={cert.date}
//               onChange={(e) =>
//                 handleInputChange(
//                   "certifications",
//                   "date",
//                   e.target.value,
//                   index
//                 )
//               }
//               className="w-full p-2 border rounded-lg"
//             />
//             <input
//               placeholder="Certificate URL"
//               value={cert.url}
//               onChange={(e) =>
//                 handleInputChange(
//                   "certifications",
//                   "url",
//                   e.target.value,
//                   index
//                 )
//               }
//               className="w-full p-2 border rounded-lg"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return renderPersonalDetails();
//       case 2:
//         return renderExperience();
//       case 3:
//         return renderEducation();
//       case 4:
//         return renderSkills();
//       case 5:
//         return renderCertifications();
//       default:
//         return null;
//     }
//   };

//   const Sidebar = () => (
//     <div className="w-64 bg-gray-50 h-screen fixed left-0 top-0 border-r border-gray-200 p-4">
//       <h1 className="text-xl font-bold mb-6 px-4">Resume Builder</h1>
//       <nav className="space-y-2">
//         {navigationItems.map((item) => {
//           const Icon = item.icon;
//           return (
//             <button
//               key={item.id}
//               onClick={() => setStep(item.id)}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
//                 step === item.id
//                   ? "bg-blue-50 text-blue-600 font-medium"
//                   : "text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               <Icon className="w-5 h-5" />
//               <span>{item.title}</span>
//               {step === item.id && (
//                 <div className="w-2 h-2 rounded-full bg-blue-600 ml-auto" />
//               )}
//             </button>
//           );
//         })}
//       </nav>
//     </div>
//   );

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Existing sidebar */}
//       <div className="flex-1 ml-64">
//         <div className="max-w-4xl mx-auto p-6">
//           {isPreviewMode ? (
//             <div>
//               <div className="flex justify-end mb-4 space-x-2">
//                 <button
//                   onClick={() => setIsPreviewMode(false)}
//                   className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg flex items-center gap-2"
//                 >
//                   <User className="w-4 h-4" /> Edit
//                 </button>
//                 <button
//                   onClick={generatePDF}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
//                 >
//                   <FileText className="w-4 h-4" /> Export PDF
//                 </button>
//               </div>
//               <ResumePreview />
//             </div>
//           ) : (
//             <>
//               <div className="bg-white rounded-lg shadow-lg mb-6">
//                 <div className="p-6">{renderStep()}</div>
//               </div>

//               <div className="flex justify-between mt-6">
//                 <div className="space-x-2">
//                   <button
//                     onClick={saveProgress}
//                     className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2"
//                   >
//                     <Save className="w-4 h-4" /> Save Draft
//                   </button>
//                   <button
//                     onClick={clearSavedData}
//                     className="px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2"
//                   >
//                     <Trash className="w-4 h-4" /> Clear Data
//                   </button>
//                 </div>
//                 <div className="space-x-2">
//                   <button
//                     onClick={() => setStep((prev) => prev - 1)}
//                     disabled={step === 1}
//                     className={/* existing previous button styles */}
//                   >
//                     <ChevronLeft className="w-4 h-4" />
//                     Previous
//                   </button>
//                   {step === 5 && (
//                     <button
//                       onClick={() => {
//                         if (validateForm()) {
//                           setIsPreviewMode(true);
//                         }
//                       }}
//                       className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
//                     >
//                       <Eye className="w-4 h-4" /> Preview
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 ml-64">
//         <div className="max-w-4xl mx-auto p-6">
//           <div className="bg-white rounded-lg shadow-lg mb-6">
//             <div className="p-6">{renderStep()}</div>
//           </div>

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={() => setStep((prev) => prev - 1)}
//               disabled={step === 1}
//               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
//                 step === 1
//                   ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                   : "bg-white border border-gray-300 hover:bg-gray-50"
//               }`}
//             >
//               <ChevronLeft className="w-4 h-4" />
//               Previous
//             </button>
//             <div className="space-x-2">
//               <button
//                 onClick={() => setStep((prev) => prev + 1)}
//                 disabled={step === 5}
//                 className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
//                   step === 5
//                     ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                     : "bg-white border border-gray-300 hover:bg-gray-50"
//                 }`}
//               >
//                 Next
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//               {step === 5 && (
//                 <button
//                   onClick={() => console.log(formData)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                 >
//                   Generate Resume
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';

// const [isPreviewMode, setIsPreviewMode] = useState(false);

// const generatePDF = async () => {
//   const input = document.getElementById('resume-preview');
//   const canvas = await html2canvas(input);
//   const imgData = canvas.toDataURL('image/png');
//   const pdf = new jsPDF();
//   const imgProps = pdf.getImageProperties(imgData);
//   const pdfWidth = pdf.internal.pageSize.getWidth();
//   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//   pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//   pdf.save('resume.pdf');
// };

// const ResumePreview = () => (
//   <div id="resume-preview" className="p-8 bg-white">
//     {/* Detailed resume layout using formData */}
//     <h1>{formData.personalDetails.fullName}</h1>
//     <p>{formData.personalDetails.email} | {formData.personalDetails.phone}</p>
//     {/* Add more detailed sections */}
//   </div>
// );

// export default ResumeBuilder;
