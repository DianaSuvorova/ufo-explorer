// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { execSync } from 'child_process';
import { fromUrl } from 'hosted-git-info';
import buildQuery from './githubQuery';


const reactRepoCommand = `npm view react repository.url`;


export default (req, res) => {
  const urlBuffer = execSync(reactRepoCommand);
  const url = urlBuffer.toString();
  const { user, project } = fromUrl(url);

  fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: { query: buildQuery({ login: user, name:  project})}
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));

  res.status(200).json({ url, user,  project, data });
}