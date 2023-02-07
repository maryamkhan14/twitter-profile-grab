import { CircularProgress } from "@mui/material";
import { useState } from "react";
// components
import ProfileDetails from "../components/ProfileDetails";
import ProfileForm from "../components/ProfileForm";

const Home = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleProfileChange = (profile) => {
    setProfile(profile);
  };
  const switchLoading = (loading) => {
    setLoading(loading);
  };
  return (
    <div className="home">
      <ProfileForm
        handleProfileChange={handleProfileChange}
        switchLoading={switchLoading}
      />
      {loading && <CircularProgress color="secondary" />}
      <div className="profiles">
        {profile && <ProfileDetails profile={profile} />}
      </div>
    </div>
  );
};

export default Home;
