import { fromUrl } from "hosted-git-info";
import fetch from "node-fetch";

const fetchPackageDetails = async (npmName) => {
  const npmUrl = `https://registry.npmjs.org/${npmName}`;
  let pkgDetail;
  await fetch(npmUrl)
    .then((response) => response.json())
    .then(async (npmResponse) => {
      const { user, project } = fromUrl(npmResponse.repository.url);
      await fetch(`https://api.github.com/repos/${user}/${project}`)
        .then((response) => response.json())
        .then((gitResponse) => {
          pkgDetail = gitResponse;
        });
    });
  return pkgDetail;
};

export default async (req, res) => {
  const dependencies = Object.keys(req.body.dependencies || {});
  const fetchAll = Promise.all(dependencies.map(fetchPackageDetails));
  fetchAll
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json("Error:", error);
    });
};
