// pages/ContactUs.jsx
import React, { useState } from "react";

export const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.company) newErrors.company = "Company is required";
    if (!form.licenseType) newErrors.licenseType = "Please select a license type";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Thank you for contacting SoftSell! (This is a mock form.)");
      setForm({ name: "", email: "", company: "", licenseType: "", message: "" });
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Contact SoftSell</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow space-y-6"
      >
        {["name", "email", "company"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded bg-white dark:bg-gray-900 dark:border-gray-700"
            />
            {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium">License Type</label>
          <select
            name="licenseType"
            value={form.licenseType}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded bg-white dark:bg-gray-900 dark:border-gray-700"
          >
            <option value="">Select one</option>
            <option>Operating System</option>
            <option>Productivity Suite</option>
            <option>Developer Tools</option>
            <option>Other</option>
          </select>
          {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded bg-white dark:bg-gray-900 dark:border-gray-700"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Submit Message
        </button>
      </form>
    </main>
  );
};

export default ContactUs;
