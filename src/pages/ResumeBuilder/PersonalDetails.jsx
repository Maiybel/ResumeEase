// src/components/ResumeBuilder/PersonalDetails.jsx
import React from "react";

const PersonalDetails = ({ data, errors, onUpdate }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Personal Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            value={data.fullName}
            onChange={(e) => onUpdate("fullName", e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-2 border rounded-lg"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onUpdate("email", e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onUpdate("phone", e.target.value)}
            placeholder="Enter your phone number"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            value={data.location}
            onChange={(e) => onUpdate("location", e.target.value)}
            placeholder="City, Country"
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Professional Summary
        </label>
        <textarea
          value={data.summary}
          onChange={(e) => onUpdate("summary", e.target.value)}
          placeholder="Write a brief summary about your professional background"
          className="w-full p-2 border rounded-lg h-32"
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
