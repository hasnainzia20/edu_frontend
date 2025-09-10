import { useEffect } from "react";
import SideNav from "../../components/SideNav";
import { useUserContext } from "../../../../context/UserContext";

function MyProfile() {
  const { user, fetchUser } = useUserContext();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex bg-gray-200 min-h-screen">
      {/* left */}
      <div className="lg:w-[20%]">
        <SideNav />
      </div>
      {/* right */}
      <div className="lg:w-[80%]">
        <div className="p-10">
          <h1 className="font-bold text-4xl">My Profile</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="p-10">
          <div className="flex flex-col gap-4 shadow-md bg-white p-10 rounded-lg">
            <h1 className="text-xl font-bold">Profile Information</h1>
            <p className="flex gap-3 align-middle">
              <span className="text-lg text-gray-600 font-bold">Name: </span>
              <span className="text-xl capitalize font-bold ">
                {user ? user.name : "Loading..."}
              </span>
            </p>
            <p className="flex gap-3 align-middle">
              <span className="text-lg text-gray-600 font-bold">Email: </span>
              <span className="text-xl capitalize font-bold ">
                {user ? user.email : "Loading..."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
