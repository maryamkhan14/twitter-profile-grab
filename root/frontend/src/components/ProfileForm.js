import React from "react";
import { useState, useEffect } from "react";

const ProfileForm = ({ handleProfileChange, switchLoading }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const searchForUser = async (user) => {
    const twitterSearchResult = await fetch(`/search/${user}`);
    let twitterSearchResultJSON = await twitterSearchResult.json();

    if (!twitterSearchResult.ok) {
      setError(twitterSearchResultJSON.error);
      switchLoading(false);
    }

    if (twitterSearchResult.ok) {
      handleProfileChange(twitterSearchResultJSON.profile);
      setUsername("");
      setError(null);
      switchLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    switchLoading(true);
    await searchForUser(username);
  };

  useEffect(() => {
    searchForUser("twitter");
  }, []);

  return (
    <form className="addProfile" onSubmit={handleSubmit}>
      <h3>Add a new profile</h3>

      <label>Username</label>
      {/* the reason there is a value prop is so that later on, if the username textbox's value is modified from elsewhere e.g. using a clear button, then the state should update too*/}
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        required="required"
      />

      <button type="submit"> Submit </button>
      {error && <label>{error}</label>}
    </form>
  );
};

export default ProfileForm;
