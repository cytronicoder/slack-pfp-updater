require("dotenv").config();
const S1 = require("s1db");
const db = new S1(process.env.S1_TOKEN);

export default async (req, res) => {
  let image = await db.get("image");

  if (!image) {
    image = "https://slack.cytronicoder.com/default.jpg";
  }

  res.redirect(image);
};
