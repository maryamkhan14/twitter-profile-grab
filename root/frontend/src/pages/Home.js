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
      item
      className="home"
      width="80vw"
      height="100%"
      display="flex"
      flexDirection="row"
      justifySelf="center"
      justifyContent="space-between"
      p={3}
      gap={3}
      sx={{ backgroundColor: "primary.main" }}
      container
    >
      <Grid
        item
        lg={6}
        className="profileForm"
        display="flex"
        justifyContent="center"
      >
        <ProfileForm handleProfileChange={handleProfileChange} />
      </Grid>

      <Grid
        item
        lg={4}
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
