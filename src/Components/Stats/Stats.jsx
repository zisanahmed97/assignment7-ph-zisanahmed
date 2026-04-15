import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Stats = () => {

  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(stored);
  }, []);

  // Count
  const call = timeline.filter(item => item.type === "call").length;
  const text = timeline.filter(item => item.type === "text").length;
  const video = timeline.filter(item => item.type === "video").length;

  const data = [
    { name: "Text", value: text },
    { name: "Call", value: call },
    { name: "Video", value: video }
  ];

  
  const COLORS = ["#7C3AED", "#1F4D3F", "#22C55E"];

  return (
    <div className="max-w-5xl mx-auto p-6 ">

      <h2 className="text-3xl font-bold mb-6">Friendship Analytics</h2>

      <div className="bg-white-200 shadow-xl rounded-xl p-10">

        <p className="text-gray-600 mb-6 font-bold">By Interaction Type</p>

        {/* Chart */}
        <div className="w-full h-[300px] flex justify-center items-center">
          <ResponsiveContainer width={300} height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={70}   
                outerRadius={100}
                paddingAngle={5}  
                cornerRadius={10} 
              >
                {
                  data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]}></Cell>
                  ))
                }
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>


        <div className="flex justify-center gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#7C3AED]"></span>
            Text
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#1F4D3F]"></span>
            Call
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#22C55E]"></span>
            Video
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;