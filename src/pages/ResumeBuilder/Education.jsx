// src/components/ResumeBuilder/Education.jsx
import React from "react";
import { Plus, Trash2 } from "lucide-react";

const Education = ({ data, errors, onUpdate, onAdd, onRemove }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Education</h2>
        <button
          onClick={onAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Education
        </button>
      </div>
      {data.map((edu, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Education {index + 1}</h3>
            <button
              onClick={() => onRemove(index)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <input
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => onUpdate(index, "institution", e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          {errors[index]?.institution && (
            <p className="text-red-500 text-sm">{errors[index].institution}</p>
          )}

          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => onUpdate(index, "degree", e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          {errors[index]?.degree && (
            <p className="text-red-500 text-sm">{errors[index].degree}</p>
          )}

          <input
            placeholder="Field of Study"
            value={edu.field}
            onChange={(e) => onUpdate(index, "field", e.target.value)}
            className="w-full p-2 border rounded-lg"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Graduation Date</label>
              <input
                type="date"
                value={edu.graduationDate}
                onChange={(e) =>
                  onUpdate(index, "graduationDate", e.target.value)
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">GPA</label>
              <input
                placeholder="Optional"
                value={edu.gpa}
                onChange={(e) => onUpdate(index, "gpa", e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
