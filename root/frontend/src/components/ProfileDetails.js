import React from "react";

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <img src={profile.profile_image_url} alt="Profile" />
      <p>Username: {profile.username}</p>
      <p>Name: {profile.name}</p>
      <p>ID: {profile.id}</p>
    </div>
  );
};

export default ProfileDetails;
