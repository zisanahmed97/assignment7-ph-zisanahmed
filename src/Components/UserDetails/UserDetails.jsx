
import React, { use } from 'react';
import { useParams } from 'react-router';

import { MdOutlineAddIcCall } from "react-icons/md";
import { MdTextsms } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaBoxArchive } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const userPromise = fetch("/data.json").then(res => res.json());

const UserDetails = () => {

  const { id } = useParams();
  const users = use(userPromise);
  const user = users.find(u => u.id == id);


  const handleAction = (type) => {
  const newActivity = {
    id: Date.now(),
    name: user.name,
    type: type, 
    date: new Date().toLocaleString()
  };

  const oldData = JSON.parse(localStorage.getItem("timeline")) || [];
  const updated = [newActivity, ...oldData];

  localStorage.setItem("timeline", JSON.stringify(updated));

  
};

  return (
    <div className="bg-base-200 min-h-screen py-10 px-4 pt-30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

       
        <div className="space-y-4">

         
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <img
              src={user.picture}
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
            />
            <h2 className="text-xl font-bold">{user.name}</h2>

            <div className={`badge mt-2 ${
              user.status === "overdue"
                ? "bg-[#EF4444] text-white"
                : user.status === "almost due"
                ? "bg-[#EFAD44] text-white"
                : "bg-[#244D3F] text-white"
            }`}>
              {user.status}
            </div>
            <br />

            <div className="badge mt-2  bg-[#CBFADB] text-[#244D3F] border-0 font-semibold">
              {user.tag1}
            </div>

            <p className="italic text-sm text-[#64748B] my-3">
              {user.bio}
            </p>
            <p className="text-xs text-[#64748B]">{user.email}</p>
          </div>


            <button className="btn bg-white rounded shadow text-[#1F2937] w-full py-7"><RiNotificationSnoozeLine /> Snooze 2 Weeks</button>
            <button className="btn bg-white rounded shadow text-[#1F2937] w-full py-7"><FaBoxArchive /> Archive</button>
            <button className="btn bg-white rounded shadow w-full text-red-500 py-7"><RiDeleteBin6Line /> Delete</button>
        

        </div>

     
        <div className="lg:col-span-2 space-y-6">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow text-center py-12">
              <h2 className="text-2xl font-bold text-[#244D3F]">{user.days_since_contact}</h2>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow text-center py-12">
              <h2 className="text-2xl text-[#244D3F] font-bold">{user.goal}</h2>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow text-center py-12">
              <h2 className="text-2xl text-[#244D3F] font-bold">{user.next_due_date}</h2>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center py-10">
            <div>
              <h3 className="font-semibold text-[#244D3F]">Relationship Goal</h3>
              <p className="text-gray-500 text-sm">
                Connect every <span className="font-bold text-[#244D3F]">{user.goal} days</span>
              </p>
            </div>
            <button className="btn btn-sm">Edit</button>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          

              <button onClick={() => handleAction("call")} className="btn p-12 text-xl">
  <MdOutlineAddIcCall /> Call
</button>

<button onClick={() => handleAction("text")} className="btn p-12 text-xl">
  <MdTextsms /> Text
</button>

<button onClick={() => handleAction("video")} className="btn p-12 text-xl">
  <MdOutlineVideocam /> Video
</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserDetails;