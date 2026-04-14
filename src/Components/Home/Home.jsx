import React from 'react';
import { FaPlus } from "react-icons/fa";
const Home = () => {
    return (
        <div>
           <div className="hero bg-base-200 ">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold pt-[80px]">Friends to keep close in your life</h1>
      <p className="py-6 text-[#64748B]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.
      </p>
      <button className="btn btn-primary bg-[#244D3F]"><FaPlus />Add a Friend</button>
    </div>
</div>
</div>


<div className='bg-base-200 py-14 '>
  <div className='max-w-6xl mx-auto px-4  grid grid-cols-1 gap-9  md:grid-cols-4 lg:grid-cols-4'>
      <div className="card bg-base-100 w-full shadow-md">
 
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-semibold">10</h2>
    <p className='text-[#64748B]'>Total Friends</p>
   
  </div>
</div>

  <div className="card bg-base-100 w-full shadow-md">
 
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-semibold">3</h2>
    <p className='text-[#64748B]'>On Track</p>
   
  </div>
</div>


  <div className="card bg-base-100 w-full shadow-md">
 
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-semibold">6</h2>
    <p className='text-[#64748B]'>Need Attention</p>
   
  </div>
</div>
  <div className="card bg-base-100 w-full shadow-md">
 
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-semibold">12</h2>
    <p className='text-[#64748B]'>Interactions This Month</p>
   
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Home;