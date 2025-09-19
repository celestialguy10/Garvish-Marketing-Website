import { useState } from "react";
import { motion } from "framer-motion";
import db from "@/appwrite/databases";

const Mainform2 = ({ setShowForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    packages: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required and should be a string.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!/^\d+$/.test(formData.contact)) {
      newErrors.contact = "Contact number should contain only numbers.";
    }

    if (!formData.packages.trim()) {
      newErrors.packages =
        "Package details are required and should be a string.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await db.notes.create(formData);

      setMessage("Data submitted successfully.");

      setFormData({
        name: "",
        email: "",
        contact: "",
        packages: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`  z-20 inset-0 bg-[rgba(0,0,0,0.7)] fixed flex flex-col h-screen w-screen justify-center items-center`}
    >
      <div className="mt-6 flex flex-col items-center justify-center max-w-xl">
        <div className="relative flex mb-10 flex-col  mx-auto p-8 md:p-28 ">
          <div className=" border-white border-b-2 relative  h-full   bg-white rounded-t-lg ">
            <button
              onClick={() => setShowForm(false)}
              className="text-3xl px-2 absolute -right-5 -top-5 rounded-full bg-white text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <img
              src="form-image1.png"
              alt="Form Image"
              className="object-cover w-full h-full p-2"
            />
          </div>
          <div className="   bg-white shadow-lg rounded-b-lg px-6 pb-6">
            {["name", "email", "contact"].map((field) => (
              <div
                className={`relative ${errors[field] ? "mb-2" : "mb-6"}`}
                key={field}
              >
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  placeholder=" "
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className={`peer w-full px-4 py-2 border ${
                    errors[field] ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 ${
                    errors[field] ? "focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                />
                <label
                  htmlFor={field}
                  className="absolute left-3 -top-2 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {errors[field] && (
                  <p className="text-red-500 text-xs">{errors[field]}</p>
                )}
              </div>
            ))}

            <div className={`relative ${errors.packages ? "mb-2" : "mb-6"}`}>
              <select
                id="packages"
                value={formData.packages}
                onChange={handleChange}
                required
                className={`peer w-full px-4 py-2 border ${
                  errors.packages ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  errors.packages ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              >
                <option value="" disabled>
                  Select Package
                </option>
                <option value="basic">Basic</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="e-commerce">E-commerce</option>
              </select>
              <label
                htmlFor="packages"
                className="absolute left-3 -top-2 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
              >
                Package Details
              </label>
              {errors.packages && (
                <p className="text-red-500 text-sm">{errors.packages}</p>
              )}
            </div>

            <button
              onClick={submitData}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
            <div className="message mt-4 text-center text-gray-700">
              {message}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Mainform2;
