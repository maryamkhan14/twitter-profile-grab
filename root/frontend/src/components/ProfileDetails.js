import React from "react";
import { Box } from "@mui/material";
const ProfileDetails = ({ profile }) => {
  return (
    <Box className="profile-details">
      <img src={profile.profile_image_url} alt="Profile" />
      <p>Username: {profile.username}</p>
      <p>Name: {profile.name}</p>
      <p>ID: {profile.id}</p>
    </Box>
  );
};

export default ProfileDetails;
