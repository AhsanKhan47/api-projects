const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  // accessToken: "-mwd1dVRl6cGZk45Tmr0RnxLEntDmDocghRZSspe_wA",
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
