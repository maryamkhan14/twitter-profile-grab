import React from "react";
import {
  Box,
  Alert,
  Button,
  Typography,
  CircularProgress,
  TextField,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState, useEffect } from "react";

const ProfileForm = ({ handleProfileChange }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchForUser = async (user) => {
    const twitterSearchResult = await fetch(`/search/${user}`);
    let twitterSearchResultJSON = await twitterSearchResult.json();

    if (!twitterSearchResult.ok) {
      setError(twitterSearchResultJSON.error);
      setLoading(false);
    }

    if (twitterSearchResult.ok) {
      handleProfileChange(twitterSearchResultJSON.profile);
      setUsername("");
      setError(null);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await searchForUser(username);
  };

  useEffect(() => {
    searchForUser("twitter");
  }, []);

  return (
    <Box
      component="form"
      className="searchProfile"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      gap={3}
    >
      <Typography variant="h4" color="secondary">
        Search for a Twitter profile.
      </Typography>

      <Box className="usernameInput" display="flex" gap={2} alignItems="center">
        <label>Enter a username:</label>
        {/* the reason there is a value prop is so that later on, if the username textbox's value is modified from elsewhere e.g. using a clear button, then the state should update too*/}
        <TextField
          id="outlined-basic"
          variant="outlined"
          color="info"
          size="small"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required={true}
        />
      </Box>

      <Box className="usernameSubmit" display="flex" gap={2}>
        <Button
          type="submit"
          variant="contained"
          color="info"
          style={{ textTransform: "none" }}
          endIcon={<TwitterIcon />}
        >
          {" "}
          Submit{" "}
        </Button>

        {loading && (
          <CircularProgress
            color="secondary"
            size="25px"
            style={{ alignSelf: "center" }}
          />
        )}
        {error && <Alert severity="error">{error}</Alert>}
      </Box>
    </Box>
  );
};

export default ProfileForm;
