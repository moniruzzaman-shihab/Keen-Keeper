import React, { useEffect, useState } from "react";

const getIcon = (type) => {
  if (type === "call") return "📞";
  if (type === "text") return "💬";
  if (type === "video") return "📹";
  return "❔";
};

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("");


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);
  }, []);


  const filteredData =
    !filter ? timeline : timeline.filter((item) => item.type === filter);

  return (
    <div className="max-w-3xl mx-auto p-6">
      

      <h1 className="text-2xl font-bold mb-6">Timeline</h1>

      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-4 py-2 rounded-lg text-sm bg-white shadow-sm"
        >
          <option value="">Filter timeline</option>
          <option value="call">📞 Call</option>
          <option value="text">💬 Text</option>
          <option value="video">📹 Video</option>
        </select>
      </div>


      {filteredData.length === 0 && (
        <p className="text-gray-500">No activity found...</p>
      )}

     
      <div className="space-y-3">
        {filteredData.map((item) => (
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