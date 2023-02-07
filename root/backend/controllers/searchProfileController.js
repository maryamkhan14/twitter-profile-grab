const axios = require("axios");
const token = process.env.TWITTER_BEARER_TOKEN;
const fields = "description,profile_image_url,verified";
const searchProfile = async (req, res) => {
  const uri = `https://api.twitter.com/2/users/by/username/${req.params.username}?user.fields=${fields}`;
  try {
    const { data: profile } = await axios.get(uri, {
      headers: {
        "User-Agent": "Twitter Profile Grab",
        Authorization: `Bearer ${token}`,
      },
    });
    if (profile.data) {
      return res.status(200).json({ profile: profile.data });
    }
    res.status(400).json({ error: "No such user exists." });
  } catch (e) {
    res
      .status(400)
      .json({ error: "Invalid username. Check length and characters." });
  }
};
module.exports = { searchProfile };
