import { useState } from "react";
import { db } from "../firebase";
import { ref, push } from "firebase/database";

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.message.trim()) newErrors.message = "Feedback message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    const timestamp = new Date().toISOString();

    try {
      await push(ref(db, "feedbacks"), { ...form, timestamp });
      setSuccessMsg("🎉 Feedback submitted successfully!");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 text-black dark:text-white rounded-2xl shadow-lg transition-all duration-500 ease-in-out">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700 dark:text-blue-400">
        Share Your Feedback
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className={`w-full border p-3 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 ${
              errors.name
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-300"
            }`}
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className={`w-full border p-3 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 ${
              errors.email
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-300"
            }`}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div>
          <textarea
            name="message"
            placeholder="Your feedback..."
            rows="4"
            className={`w-full border p-3 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 ${
              errors.message
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-300"
            }`}
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
  type="submit"
  className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 flex items-center justify-center gap-2"
  disabled={loading}
>
  {loading ? (
    <>
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
      Submitting...
    </>
  ) : (
    "Submit Feedback"
  )}
</button>


        {/* Success Message */}
        {successMsg && (
          <p className="text-green-600 dark:text-green-400 mt-4 text-center animate-fade-in">
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default FeedbackForm;
