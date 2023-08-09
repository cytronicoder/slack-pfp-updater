require("dotenv").config();
const { WebClient } = require("@slack/web-api");
const axios = require("axios").default;

const fs = require("node:fs");
const path = require("node:path");

const S1 = require("s1db");
const db = new S1(process.env.S1_TOKEN);

/**
 * Fetches a random image from the given URL.
 *
 * @return {Promise} A Promise that resolves with the image data as an array buffer.
 */
async function getRandomImage() {
  const imagesDirectory = path.join(process.cwd(), "public", "pics");
  let photos = fs.readdirSync(imagesDirectory);

  let photo = photos[Math.floor(Math.random() * photos.length)];
  // Construct the URL for the image file
  const photoURL = `https://slack.cytronicoder.com/pics/${photo}`;
  const image = await axios.get(photoURL, {
    responseType: "arraybuffer",
  });

  // Save the URL to the database
  await db.set("image", photoURL);

  return image.data;
}

/**
 * Sets the profile picture of the Slack user based on the current time.
 *
 * @return {Promise} A Promise that resolves once the profile picture is set.
 */
const handler = async (req, res) => {
  const image = await getRandomImage();
  const client = new WebClient();
  await client.users.setPhoto({
    image: image,
    token: process.env.SLACK_TOKEN,
  });
  res.redirect("/");
};

export default handler;
