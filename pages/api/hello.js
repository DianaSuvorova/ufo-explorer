// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { execSync } from "child_process";
import { fromUrl } from "hosted-git-info";
import fetch from "node-fetch";

const reactRepoCommand = "npm view react repository.url";

export default (req, res) => {
  const url = execSync(reactRepoCommand).toString();
  const { user, project } = fromUrl(url);

  fetch(`https://api.github.com/repos/${user}/${project}`)
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json("Error:", error);
    });
};
