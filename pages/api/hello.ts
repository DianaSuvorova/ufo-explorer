import type { NextApiRequest, NextApiResponse } from 'next'
import { fromUrl } from "hosted-git-info";
import fetch from "node-fetch";
import Cookies from 'cookies';

const fetchPackageDetails = async (npmName: string, accessToken: string) => {
  const npmUrl = `https://registry.npmjs.org/${npmName}`;
  let pkgDetail;
  await fetch(npmUrl)
    .then((response) => response.json())
    .then(async (npmResponse) => {
      const { user, project } = fromUrl(npmResponse.repository.url);
      await fetch(`https://api.github.com/repos/${user}/${project}`, {
        headers: {
          'Authorization': `token ${accessToken}`
        }
      })
        .then((response) => response.json())
        .then((gitResponse) => {
          pkgDetail = gitResponse;
        });
    });
  return pkgDetail;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res);
  const accessToken = cookies.get('access-token');

  const dependencies = Object.keys(req.body.dependencies || {});
  const fetchAll = Promise.all(dependencies.map(npmName => fetchPackageDetails(npmName, accessToken)));
  fetchAll
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log('there was an error!');
    });
};
