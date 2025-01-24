// src/components/ResumeBuilder/Experience.jsx
import React from "react";
import { Plus, Trash2 } from "lucide-react";

const Experience = ({ data, errors, onUpdate, onAdd, onRemove }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <button
          onClick={onAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Experience
        </button>
      </div>
      {data.map((exp, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Experience {index + 1}</h3>
            <button
              onClick={() => onRemove(index)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <input
            placeholder="Company"
            value={exp.company}
            onChange={(e) => onUpdate(index, "company", e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          {errors[index]?.company && (
            <p className="text-red-500 text-sm">{errors[index].company}</p>
          )}

          <input
            placeholder="Position"
            value={exp.position}
            onChange={(e) => onUpdate(index, "position", e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          {errors[index]?.position && (
            <p className="text-red-500 text-sm">{errors[index].position}</p>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Start Date</label>
              <input
                type="date"
                value={exp.startDate}
                onChange={(e) => onUpdate(index, "startDate", e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">End Date</label>
              <input
                type="date"
                value={exp.endDate}
                onChange={(e) => onUpdate(index, "endDate", e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

          <textarea
            placeholder="Job Description"
            value={exp.description}
            onChange={(e) => onUpdate(index, "description", e.target.value)}
            className="w-full p-2 border rounded-lg h-32"
          />
        </div>
      ))}
    </div>
  );
};

export default Experience;
