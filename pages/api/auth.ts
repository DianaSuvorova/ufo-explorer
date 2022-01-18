import fetch from "node-fetch";
import type { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;
  const queryData = {
    client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code: code.toString(),
  };

  const searchParams = new URLSearchParams(queryData);

  await fetch(
    `https://github.com/login/oauth/access_token?${searchParams.toString()}`,
    {
      method: "POST",
    }
  )
    .then((response) => response.text())
    .then((text) => {
      console.log(text);
      const sParams = new URLSearchParams(text);
      const accessToken = sParams.get('access_token');
      const cookies = new Cookies(req, res)
      cookies.set('access-token', accessToken, {
          httpOnly: true,
          sameSite: 'lax'
      })
      res.redirect('/');
    })
};
