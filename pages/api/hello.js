// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { execSync } from 'child_process';
import { accessSync } from 'fs';


const reactRepoCommand = `npm view react repository.url`;


export default (req, res) => {

  const url = execSync(reactRepoCommand);
  res.status(200).json({ url: url.toString() });
}