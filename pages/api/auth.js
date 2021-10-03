import fetch from "node-fetch";

export default (req, res) => {
  const { code } = req.query;
  const queryData = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_SECRET,
    code,
  };

  const searchParams = new URLSearchParams(queryData);

  fetch(
    `https://github.com/login/oauth/access_token?${searchParams.toString()}`,
    {
      method: "POST",
    }
  )
    .then((response) => response.text())
    .then((text) => {
      res.status(200).json(text);
    })
    .catch((error) => {
      res.status(400).json("Error:", error);
    });
};
