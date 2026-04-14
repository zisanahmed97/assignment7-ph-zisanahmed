import React, { useEffect, useState } from 'react';
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdTextsms} from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";

const Timeline = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  const filteredData = filter === "all"
    ? data
    : data.filter(item => item.type === filter);

  return (
    <div className="max-w-4xl mx-auto p-5">

      <h2 className="text-2xl font-bold mb-5">Timeline</h2>

     
  <div className="mb-5">
  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="select select-bordered border-o shadow w-full max-w-24"
  >
    <option value="all">All</option>
    <option value="call">Call</option>
    <option value="text">Text</option>
    <option value="video">Video</option>
  </select>
</div>


      <div className="space-y-4">
  {filteredData.map(item => (
    <div key={item.id} className="bg-white shadow p-4 rounded flex items-center gap-3">

      <div className="text-xl">
        {item.type === "call" && (
          <MdOutlineAddIcCall />
        )}

        {item.type === "text" && (
          <MdTextsms  />
        )}

        {item.type === "video" && (
          <MdOutlineVideocam  />
        )}
      </div>

      <div>
        <h3 className="font-semibold capitalize">
          {item.type} with {item.name}
        </h3>
        <p className="text-sm text-gray-500">{item.date}</p>
      </div>

    </div>
  ))}
</div>

    </div>
  );
};

export default Timeline;