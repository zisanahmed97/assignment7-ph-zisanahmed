import React, { use } from 'react';
  const userPromise = fetch("/data.json").then(res=> res.json())

const AllUsers = () => {

   const users =use(userPromise);

   console.log(users)
    return (
 <div>
  <h2 className='text-xl font-bold mb-3'>Your Friends</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {
      users.map((user) => {
        return (
          <div key={user.id}>
            <div className="card bg-base-100 w-full shadow-sm">
              <figure>
                <img className='w-[200px] border-0 rounded-full mt-[20px]'
                  src={user.picture}
                  alt="user"
                />
              </figure>

              <div className="card-body ">
                <h2 className="card-title mx-auto">
                  {user.name}
                </h2>

                <p className='mx-auto text-md font-semibold text-[#64748B]'>{user.days_since_contact}d ago</p>

             <div className="badge badge-secondary mx-auto bg-[#CBFADB] text-[#244D3F] border-0 font-semibold">{user.tag1}</div>
             
             <div 
  className={`badge mx-auto font-semibold ${
    user.status === "overdue"
      ? "bg-[#EF4444] text-white border-0"
      : user.status === "almost due"
      ? "bg-[#EFAD44] text-white border-0"
      : user.status === "on-track"
      ? "bg-[#244D3F] text-white border-0"
      : ""
  }`}
>
  {user.status}
</div>

              </div>
            </div>
          </div>
        );
      })
    }
  </div>
</div>
        
       
    );
};

export default AllUsers;