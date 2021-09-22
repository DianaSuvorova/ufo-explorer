// pages/api/auth/[...auth0].js
import { handleAuth } from '@auth0/nextjs-auth0';

// Access external API from an API Route docs 👇
// https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md#access-an-external-api-from-an-api-route

export default handleAuth();
