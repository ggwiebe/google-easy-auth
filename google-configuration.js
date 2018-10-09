import { google } from 'googleapis';

var config = require('../config/config.js').get(process.env.NODE_ENV);


const googleConfig = {
  clientId: config.Google.client_id, // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
  clientSecret: config.Google.client_secret, // e.g. _ASDFA%DFASDFASDFASD#FAD-
  redirect: config.Google.redirect_uris[0] // this must match your google api settings
};

/**
 * Create the google auth object which gives us access to talk to google's apis.
 */
function createConnection() {
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  );
}
