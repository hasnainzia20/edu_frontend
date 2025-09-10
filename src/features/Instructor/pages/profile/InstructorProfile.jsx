import SideNav from "../../components/SideNav";
import { AuthContext } from "../../../../context/AuthContext";
import { useUserContext } from "../../../../context/UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react";

function InstructorProfile() {
  const { user, fetchUser } = useUserContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUser();
    }, 1000); // run after 1 second

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div>
      <div className="flex bg-gray-200 min-h-screen">
        {/* left */}
        <div className="lg:w-[20%]">
          <SideNav />
        </div>
        <div className="m-5">
          <div className="flex flex-col gap-4 p-4 border border-gray-400 rounded-md">
            <div className="">
              <h2 className="text-4xl font-bold">Instructor Profile</h2>
            </div>
            {user ? (
              <>
                <div>
                  <div>
                    <h3>
                      <span className="font-bold text-lg">Email: </span>
                      {user ? user.email : "Loading..."}
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <span className="font-bold text-lg">Role: </span>
                      Instructor
                    </h3>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <span className="text-logoColor2">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorProfile;
