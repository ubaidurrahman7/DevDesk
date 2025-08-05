import React, { useState } from "react";

const initialUser = {
  name: "Ubaid Ur Rahman",
  email: "ubaid@example.com",
  joinedDate: "March 2024",
  about: "Full Stack Developer passionate about building scalable web apps.",
};

function Profile() {
  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated!");
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <h1 className="text-3xl font-bold text-green-300 mb-6">Profile</h1>

      <div className="bg-gray-900 border border-green-700 rounded-lg p-6 shadow max-w-lg">
        {isEditing ? (
          <>
            <div className="mb-4">
              <label className="block text-green-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-green-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-green-300 mb-1">About</label>
              <textarea
                name="about"
                value={user.about}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400"
                rows="4"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-green-700 hover:bg-green-600 text-black font-bold py-2 rounded shadow transition border border-green-500"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-green-300">{user.name}</h2>
            <p className="text-green-500">{user.email}</p>
            <p className="text-green-400 text-sm">Joined: {user.joinedDate}</p>
            <p className="mt-4 text-green-400">{user.about}</p>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-6 w-full bg-green-700 hover:bg-green-600 text-black font-bold py-2 rounded shadow transition border border-green-500"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
