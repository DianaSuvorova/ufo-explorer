import type { NextApiRequest, NextApiResponse } from 'next'
import { fromUrl } from "hosted-git-info";
import fetch from "node-fetch";

const fetchPackageDetails = async (npmName: string) => {
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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const dependencies = Object.keys(req.body.dependencies || {});
  const fetchAll = Promise.all(dependencies.map(fetchPackageDetails));
  fetchAll
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log('there was an error!');
    });
};
