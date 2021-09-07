import { getAccessToken, getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async (req, res) => {
  // If your Access Token is expired and you have a Refresh Token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant
  try {
    const { accessToken } = await getAccessToken(req, res, {
      scopes: ['public_repo'],
    });
    // eslint-disable-next-line no-undef
    const { user } = getSession(req, res);
    res.json({ protected: 'My Secret', id: user.sub });
    // eslint-disable-next-line no-undef
    const response = await fetch('https://api.github.com/repos/facebook/react', {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });
    const info = await response.json();

    res.status(200).json(info);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
