import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const EmailForms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Initialize EmailJS with your user ID
    emailjs.init("user_yourEmailJSUserId");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_kli8s2n";
    const templateId = "template_9aez2q";

    emailjs
      .send(serviceId, templateId, formData)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSuccessMessage("Email sent successfully!");
        setErrorMessage(null);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setSuccessMessage(null);
        setErrorMessage("Error sending email. Please try again later.");
      });
  };

  return (
    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {successMessage && (
          <div className="mb-4 text-green-600">
            <strong>{successMessage}</strong>
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 text-red-600">
            <strong>{errorMessage}</strong>
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full rounded-md border border-gray-500 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full rounded-md border border-gray-500 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 p-3 w-full rounded-md border border-gray-500 focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-[#0c52a6] text-white font-semibold px-6 py-3 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForms;
