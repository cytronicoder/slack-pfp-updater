require("dotenv").config();
const S1 = require("s1db");
const db = new S1(process.env.S1_TOKEN);

export default async (req, res) => {
  const image = await db.get("image");
  res.redirect(image);
};
