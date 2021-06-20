import { execSync } from 'child_process';
import { fromUrl } from 'hosted-git-info';
import { getAccessToken } from '@auth0/nextjs-auth0';
import buildQuery from './githubQuery';


const reactRepoCommand = `npm view react repository.url`;

export default async (req, res) => {
  const urlBuffer = execSync(reactRepoCommand);
  const url = urlBuffer.toString();

  const { accessToken } = await getAccessToken(req, res);

  const { user, project } = fromUrl(url);

  fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': "bearer token_tbd",
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: `
    {
      "query": "${buildQuery({ login: user, name:  project})}"
    }
   `
  //  body: { query: buildQuery({ login: user, name:  project})}
  })
    .then(response => response.json())
    .then(data => console.log('data returned:', data));

  res.status(200).json({ url, user,  project });
}