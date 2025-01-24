// src/components/ResumeBuilder/ResumePreview.jsx
import React from "react";

const ResumePreview = ({ data }) => {
  return (
    <div id="resume-preview" className="p-8 bg-white shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">{data.personalDetails.fullName}</h1>
        <p className="text-gray-600">
          {data.personalDetails.email} | {data.personalDetails.phone}
        </p>
        <p className="text-gray-500 mt-2">{data.personalDetails.location}</p>
      </div>

      {data.personalDetails.summary && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b mb-2">
            Professional Summary
          </h2>
          <p>{data.personalDetails.summary}</p>
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b mb-2">
            Work Experience
          </h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-medium">
                {exp.position} at {exp.company}
              </h3>
              <p className="text-gray-600">
                {exp.startDate} - {exp.endDate}
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {data.education.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-medium">
                {edu.degree} - {edu.institution}
              </h3>
              <p className="text-gray-600">Graduation: {edu.graduationDate}</p>
              {edu.gpa && <p>GPA: {edu.gpa}</p>}
            </div>
          ))}
        </section>
      )}

      {data.skills.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-100 px-2 py-1 rounded-md text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.certifications.length > 0 && (
        <section className="mt-4">
          <h2 className="text-xl font-semibold border-b mb-2">
            Certifications
          </h2>
          {data.certifications.map((cert, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-medium">{cert.name}</h3>
              <p className="text-gray-600">
                {cert.issuer} | {cert.date}
              </p>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ResumePreview;
