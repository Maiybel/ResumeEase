// src/components/ResumeBuilder/Certifications.jsx
import React from "react";
import { Plus, Trash2 } from "lucide-react";

const Certifications = ({ data, onUpdate, onAdd, onRemove }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <button
          onClick={onAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Certification
        </button>
      </div>
      {data.map((cert, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Certification {index + 1}</h3>
            <button
              onClick={() => onRemove(index)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <input
            placeholder="Certification Name"
            value={cert.name}
            onChange={(e) => onUpdate(index, "name", e.target.value)}
            className="w-full p-2 border rounded-lg"
          />

          <input
            placeholder="Issuing Organization"
            value={cert.issuer}
            onChange={(e) => onUpdate(index, "issuer", e.target.value)}
            className="w-full p-2 border rounded-lg"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Issue Date</label>
              <input
                type="date"
                value={cert.date}
                onChange={(e) => onUpdate(index, "date", e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Certificate URL</label>
              <input
                placeholder="Optional"
                value={cert.url}
                onChange={(e) => onUpdate(index, "url", e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
