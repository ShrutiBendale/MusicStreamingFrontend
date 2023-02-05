# ShrutiAndSkyeFrontend

This repo contains the frontend code for the landing page of http://melodize.shrutiandskye.com, a music streaming web app. The landing page is a npm based React app.

I have a CI/CD pipeline set up that builds this React app and deploys the assets to a AWS S3 bucket that hosts the static assets. The assets are distributed via the AWS CloudFront CDN.

#### Testing:

- Run `npm start` to test the code locally in your browser
- To test the prod build assets locally:
  1. Run `npm run build`, this will create a build folder with the static assets
  2. Run `serve -s build` an open the link outputted in the terminal in a browser to verify the changes.

#### Notes:

Any commit to the main branch will automatically trigger a build in the CI/CD pipeline and deploy the build assets to the s3 bucket that hosts the website.
