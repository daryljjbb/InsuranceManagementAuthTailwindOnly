import { useEffect, useState } from "react";

import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {

  const api = useAxios();

  const { logoutUser } = useAuth();

  const [profile, setProfile] = useState(null);

  // Fetch authenticated user profile
  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const response = await api.get("auth/profile/");

        setProfile(response.data);

      } catch (error) {

        console.error(error);
      }
    };

    fetchProfile();

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-4xl font-bold text-blue-700">
          Insurance Dashboard
        </h1>

        <button
          onClick={logoutUser}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      <div className="bg-white shadow rounded-xl p-6">

        <h2 className="text-2xl font-semibold mb-4">
          Welcome
        </h2>

        {profile ? (
          <div className="space-y-2">

            <p>
              <strong>Username:</strong>{" "}
              {profile.username}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {profile.email}
            </p>

            <p>
              <strong>Role:</strong>{" "}
              {profile.role}
            </p>

          </div>
        ) : (
          <p>Loading profile...</p>
        )}

      </div>
    </div>
  );
};

export default Dashboard;