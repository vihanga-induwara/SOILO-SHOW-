import React from "react";

type ProfileDetailProps = {
  label: string;
  value: string;
};

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-80 bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">PROFILE</h2>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileDetail: React.FC<ProfileDetailProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between bg-gray-800 text-white p-2 my-1 rounded">
      <span className="font-semibold">{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default ProfileCard;
