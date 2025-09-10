import React from "react";
import SideNav from "../../components/SideNav";

function UserDashbard() {
  return (
    <div className="flex bg-gray-200">
      {/* left */}
      <div className="lg:w-[20%]">
        <SideNav />
      </div>
      {/* right */}
      <div className="lg:w-[80%]">
        <div className="p-10">
          <h1 className="font-bold text-4xl">Student Dashboard</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDashbard;
