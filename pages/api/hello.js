import { fromUrl } from "hosted-git-info";
import fetch from "node-fetch";

export default (req, res) => {
  fetch("https://registry.npmjs.org/react")
    .then((response) => response.json())
    .then((npmResponse) => {
      const { user, project } = fromUrl(npmResponse.repository.url);
      fetch(`https://api.github.com/repos/${user}/${project}`)
        .then((response) => response.json())
        .then((gitResponse) => {
          res.status(200).json(gitResponse);
        });
    })
    .catch((error) => {
      res.status(400).json("Error:", error);
    });
};
