// src/components/ResumeBuilder/Skills.jsx
import React from "react";
import { Plus, Trash2 } from "lucide-react";

const Skills = ({ data, onUpdate, onAdd, onRemove }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Skills</h2>
        <button
          onClick={onAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Skill
        </button>
      </div>
      {data.map((skill, index) => (
        <div key={index} className="flex gap-2">
          <input
            placeholder="Skill"
            value={skill}
            onChange={(e) => onUpdate(index, e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          <button
            onClick={() => onRemove(index)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Skills;
