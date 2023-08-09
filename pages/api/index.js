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
  const directoryPath = path.join(__dirname, "../public/"); // Path to the directory
  const photos = fs.readdirSync(directoryPath); // Get all the photos from the directory
  const randomImageFile = photos[Math.floor(Math.random() * photos.length)]; // Get a random image file

  console.log(randomImageFile);

//   const imageUrl = `https://profile-pics.cytronicoder.com/${randomImageFile}`;
//   const image = await axios.get(imageUrl, {
//     responseType: "arraybuffer",
//   });

//   return image.data;
}

async function main() {
  const image = await getRandomImage();
//   console.log(image);
}

main();

/**
 * Sets the profile picture of the Slack user based on the current time.
 *
 * @return {Promise} A Promise that resolves once the profile picture is set.
 */
// export default async (req, res) => {
//   const image = await getRandomImage();
//   const client = new WebClient();
//   await client.users.setPhoto({
//     image: image,
//     token: process.env.SLACK_TOKEN,
//   });
//   res.send("Profile picture updated!");
//   //   res.redirect("https://profile-pic.cytronicoder.com/");
// };
