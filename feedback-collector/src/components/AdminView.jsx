import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import FeedbackCard from "./FeedbackCard";

const AdminView = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const feedbackRef = ref(db, "feedbacks");
    onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      const list = data
        ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
        : [];
      setFeedbacks(list.reverse());
      setLoading(false);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700 dark:text-blue-400">
        Submitted Feedback
      </h2>

      {loading ? (
        <div className="text-center text-gray-500 dark:text-gray-400 animate-pulse">
          Loading feedbacks...
        </div>
      ) : feedbacks.length > 0 ? (
        <div className="space-y-4 animate-fade-in">
          {feedbacks.map((fb) => (
            <FeedbackCard key={fb.id} feedback={fb} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-300">
          No feedback submitted yet.
        </p>
      )}
    </div>
  );
};

export default AdminView;
