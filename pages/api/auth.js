import fetch from "node-fetch";

export default (req, res) => {
  const { code } = req.query;
  const queryData = {
    client_id: "",
    client_secret: "",
    code,
  };

  const searchParams = new URLSearchParams(queryData);

  fetch(
    `https://github.com/login/oauth/access_token?${searchParams.toString()}`,
    {
      method: "POST",
    }
  )
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then((text) => {
      res.status(200).json(text);
    })
    .catch((error) => {
      res.status(400).json("Error:", error);
    });
};
