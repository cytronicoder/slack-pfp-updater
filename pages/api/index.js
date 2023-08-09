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
  const imagesDirectory = path.join(process.cwd(), "public", "images");
  let photos = fs.readdirSync(imagesDirectory);

  let photo = photos[Math.floor(Math.random() * photos.length)];
  // Construct the URL for the image file
  const photoURL = `https://profile-pics.cytronicoder.com/images/${photo}`;
  const image = await axios.get(photoURL, {
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
