// import React, { useState } from "react";

// const Mainform = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     packages: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState("");

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required and should be a string.";
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }

//     if (!/^\d+$/.test(formData.contact)) {
//       newErrors.contact = "Contact number should contain only numbers.";
//     }

//     if (!formData.packages.trim()) {
//       newErrors.packages =
//         "Package details are required and should be a string.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const submitData = async () => {
//     if (!validateForm()) return;

//     try {
//       const response = await fetch("http://localhost:3081/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.text();
//       setMessage(data);

//       setFormData({
//         name: "",
//         email: "",
//         contact: "",
//         packages: "",
//       });
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="flex mb-10 flex-row max-w-3xl mx-auto h-[500px]">
//       <div className="flex-1 border-t-[1px] bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//           Submit Your Details
//         </h2>

//         {["name", "email", "contact"].map((field) => (
//           <div className="relative mb-6" key={field}>
//             <input
//               type={field === "email" ? "email" : "text"}
//               id={field}
//               placeholder=" "
//               value={formData[field]}
//               onChange={handleChange}
//               required
//               className={`peer w-full px-4 py-2 border ${
//                 errors[field] ? "border-red-500" : "border-gray-300"
//               } rounded-lg focus:outline-none focus:ring-2 ${
//                 errors[field] ? "focus:ring-red-500" : "focus:ring-blue-500"
//               }`}
//             />
//             <label
//               htmlFor={field}
//               className="absolute left-3 -top-2 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
//             >
//               {field.charAt(0).toUpperCase() + field.slice(1)}
//             </label>
//             {errors[field] && (
//               <p className="text-red-500 text-sm">{errors[field]}</p>
//             )}
//           </div>
//         ))}

//         <div className="relative mb-6">
//           <select
//             id="packages"
//             value={formData.packages}
//             onChange={handleChange}
//             required
//             className={`peer w-full px-4 py-2 border ${
//               errors.packages ? "border-red-500" : "border-gray-300"
//             } rounded-lg focus:outline-none focus:ring-2 ${
//               errors.packages ? "focus:ring-red-500" : "focus:ring-blue-500"
//             }`}
//           >
//             <option value="" disabled>
//               Select Package
//             </option>
//             <option value="basic">Basic</option>
//             <option value="small">Small</option>
//             <option value="medium">Medium</option>
//             <option value="e-commerce">E-commerce</option>
//           </select>
//           <label
//             htmlFor="packages"
//             className="absolute left-3 -top-2 text-gray-500 text-sm bg-white px-1 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
//           >
//             Package Details
//           </label>
//           {errors.packages && (
//             <p className="text-red-500 text-sm">{errors.packages}</p>
//           )}
//         </div>

//         <button
//           onClick={submitData}
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
//         >
//           Submit
//         </button>
//         <div className="message mt-4 text-center text-gray-700">{message}</div>
//       </div>
//       <div className="hidden md:block flex-1 h-full w-full shadow-lg">
//         <img
//           src="form-image.png"
//           alt="Form Image"
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default Mainform;
