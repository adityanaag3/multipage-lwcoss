# Multi Page App using LWC OSS

The default LWC OSS project created using the [create-lwc-app](https://github.com/muenzpraeger/create-lwc-app) tool lets you create a single page application. But by slightly modifying the webpack config, you can create a multi-page application. 

This repo has the sample code for a multi-page app built with LWC OSS.

## Multiple Pages

One HTML and one JS file are created for each page of the app. In this sample code, `about.html` and `about.js` are created in the [`src`](./src) folder. A custom [`webpack.config.js`](./webpack.config.js) file is created to ensure these files are picked up by the build process.

## Steps and Changes Explained

[Watch this Quick Take](https://www.youtube.com/watch?v=M26BYVUiFCM) to learn what webpack is, and how LWC OSS uses webpack.

## How to start?

Start simple by running `yarn watch` (or `npm run watch`, if you set up the project with `npm`). This will start the project with a local development server.