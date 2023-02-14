const axios = require("axios");
const token = process.env.TWITTER_BEARER_TOKEN;
const fields = "description,profile_image_url,verified";

const obtainUserProfile = async (username) => {
  const uri = `https://api.twitter.com/2/users/by/username/${username}?user.fields=${fields}`;
  try {
    // destructure data property from results
    const { data } = await axios.get(uri, {
      headers: {
        "User-Agent": "Twitter Profile Grab",
        Authorization: `Bearer ${token}`,
      },
    });

    // return object contained inside data property
    return { ...data };
  } catch (e) {
    return { errors: e.response.data };
  }
};
const generateErrorMessages = (error) => {
  return error.errors
    ? {
        // AxiosError objects have errors array inside of them, and their message property is called message
        errorMsg: `Error: ${error.errors[0].message}. Try again.`,
      }
    : {
        // Twitter API error results do not have that array, and their message pr is called detail
        errorMsg: `Error: ${error[0].detail} Try again.`,
      };
};
const searchProfile = async (req, res) => {
  const { data, errors } = await obtainUserProfile(req.params.username);
  if (errors) {
    res.status(400).json(generateErrorMessages(errors));
  } else {
    res.status(200).json({ profile: data });
  }
};
module.exports = { searchProfile };
