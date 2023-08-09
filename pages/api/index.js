require("dotenv").config();
const { WebClient } = require("@slack/web-api");
const axios = require("axios").default;
const fs = require("node:fs");
const path = require("node:path");

/**
 * Fetches a random image from the given URL.
 *
 * @return {Promise} A Promise that resolves with the image data as an array buffer.
 */
async function getRandomImage() {
  const serverPath = path.dirname(require.main.filename);
  const publicPath = path.resolve(serverPath, "..", "..", "public");

  // Check if the directory exists
  if (!fs.existsSync(publicPath)) {
    throw new Error(`Directory not found: ${publicPath}`);
  }

  const files = fs.readdirSync(publicPath);
  const imageFiles = files.filter((file) => file.endsWith(".jpg"));
  const randomImageFile =
    imageFiles[Math.floor(Math.random() * imageFiles.length)];

  // Construct the URL for the image file
  const imageUrl = `https://profile-pics.cytronicoder.com/${randomImageFile}`;
  const image = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });

  return image.data;
}

/**
 * Sets the profile picture of the Slack user based on the current time.
 *
 * @return {Promise} A Promise that resolves once the profile picture is set.
 */
export default async (req, res) => {
  const image = await getRandomImage();
  const client = new WebClient();
  await client.users.setPhoto({
    image: image,
    token: process.env.SLACK_TOKEN,
  });
  res.send("Profile picture updated!");
  //   res.redirect("https://profile-pic.cytronicoder.com/");
};
