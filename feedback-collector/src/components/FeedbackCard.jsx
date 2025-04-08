import { User, Mail, MessageSquare } from "lucide-react";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="flex items-center mb-2 text-gray-800 dark:text-gray-200">
        <User className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
        <p className="text-sm font-medium">
          {feedback.name}
        </p>
      </div>

      <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
        <Mail className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
        <p className="text-sm">{feedback.email}</p>
      </div>

      <div className="flex items-start mt-3 mb-2 text-gray-900 dark:text-white">
        <MessageSquare className="w-4 h-4 mr-2 mt-1 text-purple-600 dark:text-purple-400" />
        <p className="text-sm">{feedback.message}</p>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-right">
        Submitted on: {new Date(feedback.timestamp).toLocaleString()}
      </p>
    </div>
  );
};

export default FeedbackCard;
