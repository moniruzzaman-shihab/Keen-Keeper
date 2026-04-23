import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#7C3AED", "#1F2937", "#22C55E"]; 


const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

    const counts = {
      call: 0,
      text: 0,
      video: 0,
    };

    timeline.forEach((item) => {
      if (counts[item.type] !== undefined) {
        counts[item.type]++;
      }
    });


    const chartData = [
      { name: "Text", value: counts.text },
      { name: "Call", value: counts.call },
      { name: "Video", value: counts.video },
    ];

    setData(chartData);
  }, []);

  return (
    <div className="p-8 max-w-5xl mx-auto">
 
      <h1 className="text-3xl font-bold mb-6">Friendship Analytics</h1>

  
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h3 className="text-sm text-gray-500 mb-4">
          By Interaction Type
        </h3>

   
        <div className="w-full h-[300px] flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;