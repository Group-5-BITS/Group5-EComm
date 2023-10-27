import { UserManager, WebStorageStateStore } from 'oidc-client';

const oidcSettings = {
  authority: 'dev-v8v2au3mfnnro6js.us.auth0.com',
  client_id: 'S9BCegL7uWUcbNzeDZUtoPV5hSVVMjYu',
  redirect_uri: 'http://13.50.62.21:5173/callback',
  response_type: 'id_token token',
  scope: 'openid profile',
  post_logout_redirect_uri: 'http://13.50.62.21:5173',
};

const userManager = new UserManager({
  ...oidcSettings,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});

export { userManager, oidcSettings };
