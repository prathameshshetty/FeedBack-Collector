import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import AdminView from "./components/AdminView";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-500 ease-in-out">
      {/* Top bar with only Theme Toggle on right */}
      <div className="flex justify-end items-center p-6 max-w-6xl mx-auto w-full">
        <ThemeToggle />
      </div>

      {/* Main content wrapper */}
      <div className="flex-grow flex flex-col items-center px-4">
        {/* App Heading */}
        <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-teal-300 transition-all duration-700">
          Feedback Collector App
        </h1>

        {/* Feedback Form or Admin View */}
        <div className="w-full max-w-3xl transform transition-all duration-500 hover:scale-[1.01]">
          {showAdmin ? <AdminView /> : <FeedbackForm />}
        </div>

        {/* Toggle Button - Below form */}
        <div className="mt-8">
          <button
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700"
            onClick={() => setShowAdmin((prev) => !prev)}
          >
            {showAdmin ? "Back to Form" : "View Submitted Feedback"}
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
