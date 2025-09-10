import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const authData = JSON.parse(localStorage.getItem("auth"));
      const token = authData.token;
      if (!token) {
        throw new Error("No token founds in localStorage");
      }
      const res = await axios.get(
        "${import.meta.env.VITE_API_BASE_URL}/api/users/myprofile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(res.data);
    } catch (err) {
      console.log("myerror", err);
    }
  };

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
