import { Grid } from "@mui/material";
import { useState } from "react";
// components
import ProfileDetails from "../components/ProfileDetails";
import ProfileForm from "../components/ProfileForm";

const Home = () => {
  const [profile, setProfile] = useState(null);

  const handleProfileChange = (profile) => {
    setProfile(profile);
  };
  return (
    <Grid
      container
      className="home"
      width="80vw"
      height="100%"
      display="flex"
      flexDirection="row"
      justifySelf="center"
      justifyContent="space-between"
      p={5}
      sx={{ backgroundColor: "primary.main" }}
    >
      <Grid
        item
        xs="auto"
        className="profileForm"
        display="flex"
        justifyContent="center"
      >
        <ProfileForm handleProfileChange={handleProfileChange} />
      </Grid>

      <Grid
        item
        xs="5"
        className="profileDetails"
        display="flex"
        sx={{ backgroundColor: "primary.alt" }}
      >
        {profile && <ProfileDetails profile={profile} />}
      </Grid>
    </Grid>
  );
};

export default Home;
