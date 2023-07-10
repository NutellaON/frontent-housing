import { AuthConfig } from '@auth0/auth0-angular';

export const environment = {
    production: false,
    auth: {
      domain: 'dev-lsfrdt2onjhafe80.us.auth0.com',
      clientId: 'zmCYIZ6yD8CaTFi8wb0fl9ZhEivubqCG',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }
  };