// pages/api/auth/[...auth0].js
import { handleAuth } from '@auth0/nextjs-auth0';

// Access external API from an API Route docs 👇
// https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md#access-an-external-api-from-an-api-route

export default handleAuth();
// {
//   async login(req, res) {
//     try {
//       await handleLogin(req, res, {
//         authorizationParams: {
//           audience: 'https://api.example.com/products', // or AUTH0_AUDIENCE
//           // Add the `offline_access` scope to also get a Refresh Token
//           scope: 'openid profile email read:products', // or AUTH0_SCOPE
//         },
//       });
//     } catch (error) {
//       res.status(error.status || 400).end(error.message);
//     }
//   },
// }
