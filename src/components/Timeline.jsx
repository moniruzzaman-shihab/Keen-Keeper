import React, { useEffect, useState } from "react";

const getIcon = (type) => {
  if (type === "call") return "📞";
  if (type === "text") return "💬";
  if (type === "video") return "📹";
  return "❔";
};

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Timeline</h1>

      {timeline.length === 0 && (
        <p className="text-gray-500">No activity yet...</p>
      )}

      <div className="space-y-3">
        {timeline.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 border rounded-xl bg-white shadow-sm"
          >
            <div className="text-xl">{getIcon(item.type)}</div>

            <div>
              <p className="font-medium capitalize">
                {item.type} with {item.friendName}
              </p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;